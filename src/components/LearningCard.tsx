import React, { useState } from 'react';
import type { CardData } from '../App';

interface LearningCardProps {
  data: CardData;
  isActive: boolean;
}

export const LearningCard: React.FC<LearningCardProps> = ({ data, isActive }) => {
  const [isTeachingExpanded, setIsTeachingExpanded] = useState(false);

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

        <div className="mt-12 text-center animate-pulse">
          <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
            Swipe up for quiz 👆
          </span>
        </div>
      </div>
    </div>
  );
};
