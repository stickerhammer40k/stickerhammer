import React from 'react';
import { Coins, Sword, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-8 md:mb-0">
          <Sword className="w-8 h-8 text-purple-400" />
          <Coins className="w-8 h-8 text-yellow-400 -ml-2" />
          <span className="ml-2 text-xl font-bold">StickerHammer</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Instagram />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Twitter />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        © 2024 StickerHammer. In the grim darkness of the far future, there is only gains.
      </div>
    </footer>
  );
};

export default Footer;