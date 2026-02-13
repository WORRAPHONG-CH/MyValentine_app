import React from 'react';

interface BackButtonProps {
  onBack: () => void;
  show: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack, show }) => {
  if (!show) return null;

  return (
    <button
      onClick={onBack}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-white/80 backdrop-blur-sm text-pink-600 rounded-full shadow-lg hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold"
      aria-label="Go back"
    >
      <span className="text-xl">←</span>
      <span className="hidden sm:inline">Back</span>
    </button>
  );
};

export default BackButton;

