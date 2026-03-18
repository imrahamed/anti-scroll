import { useState, useMemo } from 'react';
import { contentData } from './data';
import { Feed } from './components/Feed';

export type CardData = {
  id: string;
  category: string;
  topic: string;
  subtopic: string;
  shortInsight: string;
  teaching: string;
  realLifeExample: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
  };
  isInterviewQuestion?: boolean;
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(contentData.map(c => c.category));
    return Array.from(cats);
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    const filteredContent = contentData.filter(c => c.category === selectedCategory) as CardData[];
    return <Feed content={filteredContent} onBack={handleBack} category={selectedCategory} />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col p-6 items-center">
      <div className="w-full max-w-md pt-12 pb-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-center bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
          Anti-Doom Scroll
        </h1>
        <p className="text-gray-400 text-center mb-10">Select a topic to start learning.</p>

        <div className="w-full flex flex-col gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleSelectCategory(category)}
              className="w-full py-5 px-6 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:border-violet-500/50 hover:bg-gray-800 transition-all text-left flex justify-between items-center group"
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold group-hover:text-white text-gray-200 transition-colors">
                  {category}
                </span>
                <span className="text-sm text-gray-500 mt-1 font-medium">
                  {contentData.filter(c => c.category === category).length} concepts
                </span>
              </div>
              <div className="bg-gray-800 text-gray-400 p-2 rounded-full group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
