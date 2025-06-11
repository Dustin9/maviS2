import React from 'react';
import ValentineLetter from '../components/ValentineLetter';
import Draggable from 'react-draggable';

const Index = () => {
  return (
    <div className="min-h-screen flex bg-pink-100">
      <div className="w-1/4 p-4 grid grid-cols-2 gap-4 ml-8">
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 15.43.53 (1).jpeg" alt="Image 4" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 15.43.54 (2).jpeg" alt="Image 5" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 15.45.32.jpeg" alt="Image 6" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.47.jpeg" alt="Image 7" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.47 (1).jpeg" alt="Image 8" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.47 (2).jpeg" alt="Image 9" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.47 (3).jpeg" alt="Image 10" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.47 (4).jpeg" alt="Image 11" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ValentineLetter />
      </div>
      <div className="w-1/4 p-4 grid grid-cols-2 gap-4 mr-8">
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 15.43.53.jpeg" alt="Image 1" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 15.43.54 (1).jpeg" alt="Image 2" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 15.43.54.jpeg" alt="Image 3" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.47 (4).jpeg" alt="Image 11" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.48.jpeg" alt="Image 12" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.09.48 (1).jpeg" alt="Image 13" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.10.11.jpeg" alt="Image 14" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
        <Draggable>
          <img src="/images/WhatsApp Image 2025-06-10 at 16.33.15 (1).jpeg" alt="Image 15" className="w-[140px] h-[140px] object-cover rounded-lg shadow-lg" />
        </Draggable>
      </div>
    </div>
  );
};

export default Index;
