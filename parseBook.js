import fs from 'fs';
import path from 'path';

// TypeScript/JavaScript specific distractors categorized by type
const distractors = {
  types: ['string', 'number', 'boolean', 'any', 'unknown', 'never', 'void', 'object', 'tuple', 'enum'],
  keywords: ['interface', 'type', 'class', 'extends', 'implements', 'readonly', 'keyof', 'typeof', 'infer', 'namespace'],
  concepts: ['Type Inference', 'Type Narrowing', 'Generics', 'Utility Types', 'Mapped Types', 'Conditional Types', 'Type Assertions', 'Declaration Merging'],
  tools: ['tsc', 'tsconfig.json', 'ts-node', 'eslint', 'prettier', 'webpack', 'vite', 'babel'],
  errors: ['TypeError', 'SyntaxError', 'ReferenceError', 'RangeError']
};

function getDistractors(correctAnswer, type = 'types', count = 3) {
  const pool = distractors[type] || distractors.types;
  const filtered = pool.filter(w => w.toLowerCase() !== correctAnswer.toLowerCase());
  // Shuffle and take count
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
}

const parseMarkdownFiles = () => {
  const dirPath = path.join(process.cwd(), 'temp_book');
  const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.md')).sort();

  const cards = [];
  let idCounter = 1;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const match = file.match(/^(\d+)-(.*)\.md$/);
    if (!match) return;
    const chapterNum = parseInt(match[1], 10);
    const rawChapterName = match[2];

    const chapterName = rawChapterName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const tokens = content.split(/^(#{1,6})\s+(.*)$/m);

    const introduction = tokens[0].trim();
    if (introduction.length > 30) {
      cards.push(createCard(idCounter++, chapterNum, chapterName, "Introduction", introduction));
    }

    for (let i = 1; i < tokens.length; i += 3) {
      const sectionTitle = tokens[i+1]?.trim() || '';
      const sectionContent = tokens[i+2]?.trim() || '';

      if (sectionContent.length > 30) {
        cards.push(createCard(idCounter++, chapterNum, chapterName, sectionTitle, sectionContent));
      }
    }
  });

  const outputContent = `export const totalTypescriptData = ${JSON.stringify(cards, null, 4)};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src/data/totalTypescript.ts'), outputContent);
};

function createCard(id, chapterNum, chapterName, title, content) {
    return {
      id: `ts-book-${id}`,
      category: "Total TypeScript",
      topic: `Chapter ${chapterNum}: ${chapterName}`,
      subtopic: title,
      shortInsight: generateInsight(title, content),
      teaching: content, // include raw content to ensure code blocks stay intact
      realLifeExample: extractExample(content),
      quiz: generateQuiz(title, content)
    };
}

function generateInsight(title, content) {
  const sentences = content.replace(/```[\s\S]*?```/g, '').split(/[.?!]\s/);
  if (sentences.length > 0 && sentences[0].length > 10) {
    let insight = sentences[0].trim().replace(/\n/g, ' ') + '.';
    insight = insight.replace(/\[(.*?)\]\(.*?\)/g, '$1').replace(/[*_`]/g, '');
    if (insight.length > 150) {
        insight = insight.substring(0, 147) + '...';
    }
    return insight;
  }
  return `Understanding ${title} in TypeScript.`;
}

function extractExample(content) {
  const codeBlockMatch = content.match(/```(?:ts|typescript|js|javascript)?(?:\s+twoslash)?\n([\s\S]*?)```/);
  if (codeBlockMatch) {
    return "Here is a code example from the book:\n\n```ts\n" + codeBlockMatch[1].trim() + "\n```";
  }

  // If no code block is found, see if we can find an inline code snippet that's decently sized
  const inlineMatch = content.match(/`([^`]{10,})`/);
  if (inlineMatch) {
      return `For example, consider this syntax: \`${inlineMatch[1]}\``;
  }

  const lines = content.split('\n');
  for (const line of lines) {
    if (line.toLowerCase().includes('for example') || line.toLowerCase().includes('imagine')) {
      return line.trim();
    }
  }
  return "Review the principles described above to apply them in your TypeScript projects.";
}

function generateQuiz(title, content) {
  const cleanContent = content.replace(/```[\s\S]*?```/g, '');
  const sentences = cleanContent.split(/[.?!]\s/);

  // Let's try to extract a definition or a strong statement
  let bestSentence = null;
  for (const sentence of sentences) {
    if ((sentence.includes(' is ') || sentence.includes(' allows ') || sentence.includes(' means ')) && sentence.length < 150 && sentence.length > 30) {
      bestSentence = sentence.trim();
      break;
    }
  }

  if (!bestSentence && sentences.length > 1) {
    bestSentence = sentences.find(s => s.length > 40 && s.length < 150);
  }

  // Default fallback
  let quiz = {
    question: `What concept does this section on '${title}' primarily focus on?`,
    options: [
        title,
        ...getDistractors(title, 'concepts', 3)
    ].sort(() => Math.random() - 0.5),
    answer: title
  };

  if (bestSentence) {
    const words = bestSentence.split(' ');
    // Try to find a good keyword to replace
    let targetWord = words.find(w =>
        w.length >= 5 &&
        !['TypeScript', 'JavaScript'].includes(w) &&
        !w.includes('this') &&
        !w.includes('that')
    );

    if (!targetWord && words.length > 3) {
      targetWord = words[Math.floor(words.length / 2)];
    }

    if (targetWord) {
      const cleanTarget = targetWord.replace(/[,;:]/g, '');
      const questionText = bestSentence.replace(targetWord, '______');

      // Determine what kind of distractor to use based on the target word
      let distractorType = 'concepts';
      if (['string', 'number', 'boolean', 'any', 'void'].includes(cleanTarget.toLowerCase())) {
          distractorType = 'types';
      } else if (['interface', 'type', 'class'].includes(cleanTarget.toLowerCase())) {
          distractorType = 'keywords';
      }

      const wrongAnswers = getDistractors(cleanTarget, distractorType, 3);

      quiz = {
        question: `Choose the best answer to complete the sentence:\n\n"${questionText}?"`,
        options: [
          cleanTarget,
          ...wrongAnswers
        ].sort(() => Math.random() - 0.5),
        answer: cleanTarget
      };
    }
  }

  return quiz;
}

parseMarkdownFiles();
