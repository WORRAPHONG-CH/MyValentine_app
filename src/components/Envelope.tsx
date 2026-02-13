import React, { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [isVisible] = useState(true);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className={`relative w-80 h-64 md:w-96 md:h-72 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in' : ''}`}
          onClick={onOpen}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          >
        {/* Envelope base */}
        <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 rounded-lg shadow-2xl border-2 border-pink-500"></div>
        
        {/* Envelope flap */}
        <div 
          className="absolute top-16 w-full h-1/3 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-t-lg transform origin-bottom transition-transform duration-500"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            // transform: isHovered ? 'rotateX(-45deg)' : 'rotateX(0deg)',
            transformStyle: 'preserve-3d',
          }}
        ></div>
        
        {/* Seal */}
        <div className={`absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ${isVisible ? 'animate-text-fade-in' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-pulse">
            <span className="text-3xl md:text-4xl">💌</span>
          </div>
        </div>
        
        {/* Click hint */}
        <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center ${isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <p className="text-pink-700 font-semibold text-lg md:text-xl animate-pulse">
            Click to open
          </p>
        </div>
      </div>
    </div>
  );
};

export default Envelope;

