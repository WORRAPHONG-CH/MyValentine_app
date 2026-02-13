import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient background with pink tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 animate-gradient-shift"></div>
      
      {/* Floating hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-400 opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            fontSize: `${20 + Math.random() * 30}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;

