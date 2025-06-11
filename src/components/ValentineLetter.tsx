import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import TypewriterText from './TypewriterText';
import FloatingHearts from './FloatingHearts';

const ValentineLetter = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnvelopeClick = () => {
    if (!envelopeOpened) {
      setEnvelopeOpened(true);
      // Show letter after envelope opens
      setTimeout(() => {
        setLetterVisible(true);
      }, 1000);
      // Show content after letter appears
      setTimeout(() => {
        setShowContent(true);
      }, 2000);
    }
  };

  const letterText = `My Dearest Love,

Every moment with you feels like a beautiful dream that I never want to wake up from. Your smile lights up my world brighter than a thousand stars, and your laughter is the sweetest melody my heart has ever known.

When I look into your eyes, I see our future together - filled with endless adventures, quiet Sunday mornings, shared dreams, and love that grows stronger with each passing day.

You are my everything, my heart, my soul, my forever. This Valentine's Day, I want you to know that loving you is the greatest gift life has given me.

Forever and always yours,
Your devoted admirer ❤️`;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-rose-100/30 to-purple-200/20 animate-pulse"></div>
      
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Hint text */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-pink-800 font-bold text-2xl tracking-wide animate-pulse">
      </div>
      
      {/* Main container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Envelope */}
        <div className="relative">
          {/* Envelope base */}
          <div 
            onClick={handleEnvelopeClick}
            className={`
              relative bg-red-200 rounded-lg shadow-xl border border-red-300
              transition-all duration-1000 ease-in-out cursor-pointer
              hover:scale-105 active:scale-95
              ${envelopeOpened ? 'scale-110 opacity-90' : 'scale-100 opacity-100'}
            `}
            style={{
              width: '280px',
              height: '180px',
            }}
          >
            {/* Envelope flap */}
            <div 
              className={`
                absolute top-0 left-0 w-full bg-red-300 border border-red-400
                transition-all duration-1500 cubic-bezier(0.4, 0, 0.2, 1)
                ${envelopeOpened ? '-rotate-180 translate-y-[-100%]' : 'rotate-0'}
              `}
              style={{
                height: '90px',
                clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
              }}
            >
              {/* Heart seal */}
              <div 
                onClick={handleEnvelopeClick}
                className="absolute top-6 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
              >
                <Heart className="w-5 h-5 text-red-600 fill-current" />
              </div>
            </div>
            
            {/* Envelope body */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-red-200 border border-red-300 rounded-b-lg"></div>
          </div>

          {/* Letter emerging from envelope */}
          <div 
            className={`
              absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-pink-200/50
              transition-all duration-1500 cubic-bezier(0.34, 1.56, 0.64, 1)
              ${letterVisible 
                ? 'translate-y-[-50%] translate-x-[-50%] left-1/2 top-1/2 scale-110 opacity-100' 
                : 'translate-y-0 translate-x-0 bottom-4 left-4 scale-75 opacity-0'
              }
            `}
            style={{
              width: '240px',
              minHeight: '320px',
              transformOrigin: 'center center',
              position: letterVisible ? 'fixed' : 'absolute',
              zIndex: letterVisible ? 50 : 10,
            }}
          >
            {/* Letter header */}
            <div className="text-center p-3 border-b border-pink-200/30">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <h1 className="text-lg font-serif text-pink-800">Carta aberta pra vc</h1>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              </div>
              <div className="text-xs text-pink-600 font-light">12-06-2025</div>
            </div>
            
            {/* Letter content */}
            <div className="p-3">
              {showContent && (
                <div className="font-serif text-gray-800 leading-relaxed text-xs">
                  <TypewriterText text={letterText} speed={100} />
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-300 rounded-full opacity-70"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineLetter;
