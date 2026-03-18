import React, { useState, useEffect, useRef } from 'react';
import type { CardData } from '../App';
import { LearningCard } from './LearningCard';

interface FeedProps {
  content: CardData[];
  onBack: () => void;
  category: string;
}

export const Feed: React.FC<FeedProps> = ({ content, onBack, category }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Load saved progress on mount
  useEffect(() => {
    const savedIndex = localStorage.getItem(`progress_${category}`);
    if (savedIndex) {
      const idx = parseInt(savedIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < content.length) {
        setActiveIndex(idx);

        // Scroll to the saved position immediately
        if (containerRef.current) {
          containerRef.current.scrollTop = idx * containerRef.current.clientHeight;
        }
      }
    }
    // Set a slight delay before showing content to avoid flash while scrolling to saved position
    setTimeout(() => setIsReady(true), 50);
  }, [category, content.length]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const itemHeight = container.clientHeight;
    // Don't calculate if height is 0 (can happen on unmount/resize)
    if (itemHeight === 0) return;

    const index = Math.round(container.scrollTop / itemHeight);

    if (index !== activeIndex && index >= 0 && index < content.length) {
      setActiveIndex(index);
      // Save progress to local storage
      localStorage.setItem(`progress_${category}`, index.toString());
    }
  };

  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center fixed inset-0">
      <div className="h-full w-full max-w-md bg-gray-950 relative overflow-hidden shadow-2xl border-x border-gray-900">
        <div className="absolute top-0 left-0 right-0 z-50 flex p-5 justify-between items-start pointer-events-none bg-gradient-to-b from-black/80 to-transparent pb-10">
          <button
            onClick={onBack}
            className="pointer-events-auto bg-white/10 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-white/20 transition shadow-lg border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 text-gray-300 shadow-lg mt-1">
            {category}
          </div>
        </div>

        <div
          ref={containerRef}
          className={`h-full w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar pb-[env(safe-area-inset-bottom)] transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
          onScroll={handleScroll}
        >
          {content.map((card, index) => (
            <div key={card.id} className="snap-start h-full w-full flex-shrink-0 relative overflow-hidden">
              <LearningCard data={card} isActive={index === activeIndex && isReady} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
