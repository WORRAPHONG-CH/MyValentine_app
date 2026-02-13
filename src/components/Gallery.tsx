import React, { useEffect, useRef, useState, useCallback } from "react";

interface ImageItem {
  id: number;
  url: string;
}

// const CLOUD_NAME = "dmwnlvi6h";
// const FOLDER = "memories";
const TOTAL_IMAGES = 60;
const BATCH_SIZE = 12;
const image_url = import.meta.env.VITE_IMAGE_GF_URL;


const generateImageUrl = (id: number) =>{
    console.log(`url:${image_url}/img_${id+1}.jpg`)
    return `${image_url}/img_${id}.jpg`;

}
  

const generateBatch = (start: number, end: number): ImageItem[] => {
  const arr: ImageItem[] = [];
  for (let i = start; i <= end; i++) {
    arr.push({
      id: i,
      url: generateImageUrl(i),
    });
  }
  return arr;
};

const InfiniteGallery: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Initialize state ทันที ไม่ใช้ effect
  const [images, setImages] = useState<ImageItem[]>(() =>
    generateBatch(1, BATCH_SIZE)
  );

  const loadMoreImages = useCallback(() => {
    const currentCount = images.length;

    if (currentCount >= TOTAL_IMAGES) return;

    const start = currentCount + 1;
    const end = Math.min(currentCount + BATCH_SIZE, TOTAL_IMAGES);

    const newBatch = generateBatch(start, end);

    setImages((prev) => [...prev, ...newBatch]);
  }, [images.length]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadMoreImages]);

  return (
    <div className="relative flex flex-col items-center  md:justify-start  min-h-screen px-4 py-20 transform transition-all duration-500 animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
        ความสดใสของคุณแฟนสุดน่ารัก
      </h2>

      <div
        className="grid gap-4
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4"
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-2xl shadow-lg bg-white transform transition-all duration-500 animate-fade-in"
          >
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              loading="lazy"
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500
              
              "
            />
          </div>
        ))}
      </div>

      {images.length < TOTAL_IMAGES && (
        <div
          ref={loaderRef}
          className="h-20 flex items-center justify-center"
        >
          <p className="text-gray-500">Loading more images...</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteGallery;
