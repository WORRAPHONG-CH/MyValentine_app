import React, { useState } from 'react';

interface LetterCardProps {
  onExpand: () => void;
}

const LetterCard: React.FC<LetterCardProps> = ({ onExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible] = useState(true);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      onExpand();
    }, 800);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center1 md:justify-center min-h-screen px-4 py-8">
      <div 
        className={`bg-white/90 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full transform transition-all duration-500 ${
          isExpanded ? 'scale-110 md:scale-125' : ''
        } ${isVisible ? 'animate-fade-in' : ''}`}
        style={{
          fontFamily: 'Kanit, serif',
        }}
      >
        <div className="space-y-4 text-gray-600">
          <div className={`text-right text-sm text-pink-600 mb-4 ${isVisible ? 'animate-text-fade-in' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            February 14, 2026
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-bold text-pink-500 mb-4 text-center ${isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            ถึงที่รักของเค้า,
          </h2>
          
          <div className="space-y-3 text-base md:text-lg leading-relaxed text-pink-400">
            <p className={isVisible ? 'animate-text-slide-up' : ''} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              {`เค้าอยากจะบอกว่า "Happy Valentine & Happy Anniversary 7 years" ของเรานะครับ`}
            </p>
            
            <p className={isVisible ? 'animate-text-slide-up' : ''} style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              เค้าขอบคุณที่รักมากๆทีอยู่กันมาถึง 7 ปีได้ ขอบคุณสำหรับความรักที่คอยมอบให้และที่คอยเคียงข้างกันแม้ในวันที่เค้าลำบากนะ ของขวัญอาจจะไม่ได้มีอะไรมากมาย แต่เค้าตั้งใจทำสุดๆเลยนะครับ 
            </p>

            <p className={isVisible ? 'animate-text-slide-up' : ''} style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              สุดท้ายนี้อยากจะบอกว่ารักมากๆเลยนะ อยากอยู่ในทุกช่วงเวลาของชีวิตเลย อยู่กับเค้าแบบนี้นานๆเลยนะครับ 
            </p>
            
            
            <p className={`mt-6 text-right font-semibold text-pink-500 ${isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
              รักมากๆเลยนะ❤️<br />
              จากคุณแฟน 
            </p>
          </div>
          
          {!isExpanded && (
            <button
              onClick={handleExpand}
              className={`mt-6 w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-text-slide-up' : ''}`}
              style={{ animationDelay: '1.4s', animationFillMode: 'both' }}
            >
              ดูต่อสิครับ →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LetterCard;

