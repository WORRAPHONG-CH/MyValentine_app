import React, { useState } from 'react';

interface IntroCardProps {
  onNext: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onNext }) => {
  const [isVisible] = useState(true);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full transform transition-all duration-500 animate-fade-in">
        <div className="text-center space-y-6">
          <div className={`text-6xl md:text-7xl mb-4 animate-bounce ${isVisible ? 'animate-text-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>💌</div>
          <h1 className={`text-3xl md:text-4xl font-bold text-pink-600 mb-4 ${isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            วันอะไรเอ่ย?
          </h1>
          <p className={`text-gray-700 text-lg md:text-xl leading-relaxed ${isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {`วันนี้วันพิเศษมากๆ อยากรู้ป่าวมีอะไรต่อ กดเลยดิรอไรร ตั้งใจทำมากเลยนาา `}
          </p>
          <button
            onClick={onNext}
            className={`mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg w-full md:w-auto ${isVisible ? 'animate-text-slide-up' : ''}`}
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            กดที่หัวใจนี่เลย ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;

