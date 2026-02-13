import React, { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  emoji: string;
  title: string;
  message: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const items: CarouselItem[] = [
    {
      id: 1,
      emoji: '🌹',
      title: 'Roses',
      message: 'Like a rose, you bloom beautifully in my life',
    },
    {
      id: 2,
      emoji: '✨',
      title: 'Magic',
      message: 'You bring magic to every ordinary moment',
    },
    {
      id: 3,
      emoji: '💝',
      title: 'Gift',
      message: 'You are the greatest gift I could ever receive',
    },
    {
      id: 4,
      emoji: '🌟',
      title: 'Star',
      message: 'You shine brighter than any star in the sky',
    },
    {
      id: 5,
      emoji: '🎈',
      title: 'Joy',
      message: 'Your presence fills my heart with endless joy',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-md">
        <h2 className={`text-3xl md:text-4xl font-bold text-pink-700 text-center mb-8 1${isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          รวมความทรงจำของเรา
        </h2>
        
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 min-h-[400px] flex flex-col items-center justify-center">
          {/* Carousel content */}
          <div className="flex-1 flex items-center justify-center w-full overflow-hidden relative">
            <div className="w-full h-full relative">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 px-4 text-center transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className={`text-8xl md:text-9xl mb-6 animate-bounce ${index === currentIndex && isVisible ? 'animate-text-fade-in' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    {item.emoji}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold text-pink-600 mb-4 ${index === currentIndex && isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    {item.title}
                  </h3>
                  <p className={`text-lg md:text-xl text-gray-700 leading-relaxed ${index === currentIndex && isVisible ? 'animate-text-slide-up' : ''}`} style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                    {item.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between w-full mt-8">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-pink-600 w-8'
                      : 'bg-pink-300 hover:bg-pink-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

