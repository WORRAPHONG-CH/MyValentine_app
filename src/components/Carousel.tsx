import React, { useState, useEffect } from "react";


interface CarouselItem {
  id: number;
  imageUrl: string;
}

interface CarouselProps {
  onNext: () => void
}

const image_url = import.meta.env.VITE_IMAGE_URL;
const total_image = 29;

const images: CarouselItem[] = Array.from({ length: total_image }, (_, i) => ({
    id: i + 1,
    imageUrl: `${image_url}/imgt_${i+1}.jpg`,
  }));


const Carousel: React.FC<CarouselProps> = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 Auto slide ทุก 4 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index);
  // };

  return (
    <div className="relative flex flex-col items-center  md:justify-start h-screen px-4 py-8 ">
      <div className="w-full max-w-2xl md:max-w-4xl h-[80vh] md:h-fit">
        <h2 className="text-3xl font-bold text-pink-700 text-center mb-8">
          รวมความทรงจำของเรา
        </h2>

        <div className="relative bg-white rounded-2xl  shadow-xl overflow-hidden">

          {/* Image */}
          <div className="relative w-full h-[50vh] md:h-[60vh] ">
            {images.map((item, index) => (
              <img
                key={item.id}
                src={item.imageUrl}
                alt={`Slide ${item.id}`}
                className={`absolute w-full h-full object-cover md:object-contai1 transition-opacity duration-700 rounded-2xl  ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between px-2 py-3">

            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-pink-500 text-white md:text-3xl rounded-full hover:bg-pink-600"
            >
              ←
            </button>

            {/* <div className="flex gap-2 overflow-x-auto max-w-[200px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-pink-600 w-6"
                      : "bg-pink-300"
                  }`}
                />
              ))}
            </div> */}

            <button
              onClick={onNext}
              className={` w-7/12 md:w-4/12  px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-text-slide-up`}
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              ดูความน่ารักของคุณแฟนกัน
            </button>

            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 md:text-3xl"
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
