import React from 'react';
import { Coins, Sword, Timer, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/vimeo/475338669/space-54124.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Sword className="w-16 h-16 text-purple-400" />
          <Coins className="w-16 h-16 text-yellow-400 -ml-4" />
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-400">
          StickerHammer
        </h1>
        <p className="text-2xl mb-4 text-gray-300">
          Where Space Marines Meet Stonks! 🚀
        </p>
        <p className="text-lg mb-8 text-gray-400">
          Limited Edition 2"x2" Stickers | Warhammer Meets Finance Humor
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
            <Timer className="w-5 h-5 text-yellow-400 mr-2" />
            <span>Pre-Order Now</span>
          </div>
          <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span>2"x2" Premium Quality</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;