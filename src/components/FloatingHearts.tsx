
import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
    size: 0.5 + Math.random() * 0.8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            transform: `scale(${heart.size})`,
          }}
        >
          <Heart 
            className="w-4 h-4 text-pink-300/40 animate-pulse" 
            style={{
              animationDelay: `${heart.delay * 0.5}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
