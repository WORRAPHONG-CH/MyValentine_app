import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

type Heart = {
  id: number;
  offset: number;
};

const ValentineMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [hearts, setHearts] = useState<Heart[]>([]);

  // autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  // update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // floating hearts (SAFE)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now(),
        offset: Math.random() * 160 - 80, // generate here instead
      };

      setHearts((prev) => [...prev, newHeart]);
    }, 900);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/GiveMeYourForever.mp3" loop />

      {/* Floating Hearts */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-40">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute bottom-0 left-1/2 text-pink-400 animate-float text-xl"
            style={{
              transform: `translateX(${heart.offset}px)`
            }}
            onAnimationEnd={() =>
              setHearts((prev) =>
                prev.filter((h) => h.id !== heart.id)
              )
            }
          >
            💗
          </span>
        ))}
      </div>

      {/* Music Badge */}
      <div className="fixed bottom-5 left-0 right-0 z-50  flex justify-center">
        <div className="w-full max-w-md mx-4 mb-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-2xl shadow-2xl p-4 backdrop-blur-md border border-white/30">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-80">Now Playing</p>
              <p className="font-semibold text-sm">
                Give Me Your Forever
              </p>
            </div>

            <button
              onClick={toggleMusic}
              className={`p-3 rounded-full bg-white/20 transition active:scale-90 ${
                isPlaying ? "animate-pulse" : ""
              }`}
            >
              {isPlaying ? (
                <Pause size={22} />
              ) : (
                <Play size={22} />
              )}
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Volume2 size={18} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-pink-600"
            />
          </div>
        </div>
      </div>

      <style>
        {/* {`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-110vh) scale(1.4);
              opacity: 0;
            }
          }

          .animate-float {
            animation: floatUp 4s linear forwards;
          }
        `} */}
      </style>
    </>
  );
};

export default ValentineMusicPlayer;
