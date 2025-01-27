import { Coins, Sword, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center space-x-6">
        <div className="flex items-center">
          <Sword className="w-8 h-8 text-purple-400" />
          <Coins className="w-8 h-8 text-yellow-400 -ml-2" />
          <span className="ml-2 text-xl font-bold">StickerHammer40k</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Instagram />
          </a>
          <span className="text-gray-500 text-sm">© 2024 StickerHammer40k. WAAAGH! Stick it, own it!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
