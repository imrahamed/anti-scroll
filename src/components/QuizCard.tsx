import React, { useState } from 'react';
import type { CardData } from '../App';

interface QuizCardProps {
  data: CardData;
  isActive: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ data, isActive }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
    }
  };

  const isInterview = data.isInterviewQuestion;

  return (
    <div className={`h-full w-full flex flex-col p-5 pb-8 relative ${isInterview ? 'bg-gradient-to-br from-indigo-950 to-purple-950' : 'bg-gray-950'} text-white transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'} justify-center`}>
      <div className="w-full bg-black/60 rounded-3xl p-5 border border-white/5 backdrop-blur-xl shrink-0 z-20 shadow-2xl">
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
