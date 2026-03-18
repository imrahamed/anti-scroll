import React, { useState } from 'react';
import type { CardData } from '../App';

interface LearningCardProps {
  data: CardData;
  isActive: boolean;
}

export const LearningCard: React.FC<LearningCardProps> = ({ data, isActive }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTeachingExpanded, setIsTeachingExpanded] = useState(false);

  const handleAnswerClick = (option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
    }
  };

  const isInterview = data.isInterviewQuestion;

  return (
    <div className={`h-full w-full flex flex-col p-5 pb-8 relative ${isInterview ? 'bg-gradient-to-br from-indigo-950 to-purple-950' : 'bg-gray-950'} text-white transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-20 pb-4">

        {/* Category/Topic Tags */}
        <div className="flex gap-2 mb-6">
          <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
            {data.topic}
          </span>
          {isInterview && (
            <span className="bg-rose-500/20 text-rose-300 text-xs font-semibold px-3 py-1 rounded-full border border-rose-500/50 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Interview Q
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight drop-shadow-lg text-white">
          {data.shortInsight}
        </h1>

        {/* Teaching Section */}
        <div
          className="mb-6 cursor-pointer"
          onClick={() => setIsTeachingExpanded(!isTeachingExpanded)}
        >
          <div className={`text-gray-300 text-lg md:text-xl font-medium leading-relaxed transition-all duration-300 ${isTeachingExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
            <span className="mr-2 inline-block">📘</span>
            {data.teaching}
          </div>
          {!isTeachingExpanded && (
            <p className="text-sm text-gray-500 mt-2 font-bold uppercase tracking-wider">Tap to read more</p>
          )}
        </div>

        {/* Real Life Example */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 shadow-inner backdrop-blur-sm">
          <p className="text-gray-200 text-base md:text-lg italic flex items-start">
            <span className="mr-3 text-xl">💡</span>
            <span>{data.realLifeExample}</span>
          </p>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="w-full bg-black/60 rounded-3xl p-5 border border-white/5 backdrop-blur-xl shrink-0 z-20 shadow-2xl mt-4">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
          <span className="text-xl">🧠</span>
          {isInterview ? 'Test Your Knowledge' : 'Quick Check'}
        </h3>
        <p className="text-gray-200 font-medium mb-5">{data.quiz.question}</p>

        <div className="flex flex-col gap-3">
          {data.quiz.options.map((option, idx) => {
            let buttonClass = "w-full text-left p-4 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 border border-white/10";
            let icon = <span className="w-6 inline-block font-mono text-gray-500">{String.fromCharCode(65 + idx)}.</span>;

            if (selectedAnswer === option) {
              if (option === data.quiz.answer) {
                buttonClass += " bg-green-500/20 border-green-500/50 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                icon = <span className="w-6 inline-block text-green-400">✅</span>;
              } else {
                buttonClass += " bg-red-500/20 border-red-500/50 text-red-300";
                icon = <span className="w-6 inline-block text-red-400">❌</span>;
              }
            } else if (selectedAnswer && option === data.quiz.answer) {
              // Highlight correct answer if user got it wrong
              buttonClass += " bg-green-500/10 border-green-500/30 text-green-400/80";
              icon = <span className="w-6 inline-block text-green-400/80">✅</span>;
            } else if (!selectedAnswer) {
              buttonClass += " bg-white/5 hover:bg-white/10 text-gray-300";
            } else {
              buttonClass += " bg-white/5 text-gray-600 opacity-50";
            }

            return (
              <button
                key={idx}
                disabled={selectedAnswer !== null}
                onClick={() => handleAnswerClick(option)}
                className={buttonClass}
              >
                <div className="flex items-center">
                  {icon}
                  <span className="flex-1 ml-2">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div className="mt-4 text-center animate-pulse">
            <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
              Swipe up for next 👆
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
