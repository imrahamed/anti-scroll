import fs from 'fs';
import path from 'path';

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

    // Split the entire file by any heading level (#, ##, ###, ####, etc)
    // The regex captures the hashes, and the text of the heading.
    // It splits the content, giving an array: [contentBeforeFirstHeading, hashes1, heading1, content1, hashes2, heading2, content2, ...]
    const tokens = content.split(/^(#{1,6})\s+(.*)$/m);

    const introduction = tokens[0].trim();
    if (introduction.length > 30) {
      cards.push({
        id: `ts-book-${idCounter++}`,
        category: "Total TypeScript",
        topic: `Chapter ${chapterNum}: ${chapterName}`,
        subtopic: "Introduction",
        shortInsight: `Introduction to ${chapterName}`,
        teaching: sanitizeText(introduction),
        realLifeExample: extractExample(introduction),
        quiz: generateQuiz("Introduction", introduction)
      });
    }

    // Process heading tokens
    for (let i = 1; i < tokens.length; i += 3) {
      const headingLevelHashes = tokens[i];
      const sectionTitle = tokens[i+1]?.trim() || '';
      const sectionContent = tokens[i+2]?.trim() || '';

      if (sectionContent.length > 30) { // Keep even small sections
        cards.push({
          id: `ts-book-${idCounter++}`,
          category: "Total TypeScript",
          topic: `Chapter ${chapterNum}: ${chapterName}`,
          subtopic: sectionTitle,
          shortInsight: generateInsight(sectionTitle, sectionContent),
          teaching: sanitizeText(sectionContent),
          realLifeExample: extractExample(sectionContent),
          quiz: generateQuiz(sectionTitle, sectionContent)
        });
      }
    }
  });

  const outputContent = `export const totalTypescriptData = ${JSON.stringify(cards, null, 4)};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src/data/totalTypescript.ts'), outputContent);
};

function sanitizeText(text) {
  return text;
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
  return `Key concepts about ${title}.`;
}

function extractExample(content) {
  const codeBlockMatch = content.match(/```(?:ts|typescript|js|javascript)?(?:\s+twoslash)?\n([\s\S]*?)```/);
  if (codeBlockMatch) {
    return "Consider this code snippet:\n```ts\n" + codeBlockMatch[1].trim() + "\n```";
  }

  const lines = content.split('\n');
  for (const line of lines) {
    if (line.toLowerCase().includes('for example') || line.toLowerCase().includes('imagine')) {
      return line.trim();
    }
  }
  return "Review the code snippets and examples provided in the teaching section.";
}

function generateQuiz(title, content) {
  const cleanContent = content.replace(/```[\s\S]*?```/g, '');
  const sentences = cleanContent.split(/[.?!]\s/);
  let bestSentence = null;

  for (const sentence of sentences) {
    if ((sentence.includes(' is ') || sentence.includes(' allows ') || sentence.includes(' used for ') || sentence.includes(' means ')) && sentence.length < 150 && sentence.length > 30) {
      bestSentence = sentence.trim();
      break;
    }
  }

  if (!bestSentence && sentences.length > 1) {
    bestSentence = sentences.find(s => s.length > 40 && s.length < 150);
  }

  if (bestSentence) {
    const words = bestSentence.split(' ');
    let targetWord = words.find(w => w.length >= 6 && !['TypeScript', 'JavaScript'].includes(w));
    if (!targetWord && words.length > 3) {
      targetWord = words[Math.floor(words.length / 2)];
    }

    if (targetWord) {
      const cleanTarget = targetWord.replace(/[,;:]/g, '');
      const questionText = bestSentence.replace(targetWord, '______');
      return {
        question: `Fill in the blank: ${questionText}?`,
        options: [
          cleanTarget,
          "variable",
          "function",
          "runtime"
        ].sort(() => Math.random() - 0.5),
        answer: cleanTarget
      };
    }
  }

  return {
    question: `What is the primary focus of the section on ${title}?`,
    options: [
      `Understanding the core concepts of ${title}.`,
      `How to replace JavaScript entirely.`,
      `Making code run faster in the browser.`,
      `Using deprecated features of TypeScript.`
    ],
    answer: `Understanding the core concepts of ${title}.`
  };
}

parseMarkdownFiles();
