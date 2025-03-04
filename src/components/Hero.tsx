import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Coins, Sword, Timer, Sparkles } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Hero = () => {
  const [bgVideoUrl, setBgVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBackgroundVideo = async () => {
      try {
        const { data } = supabase.storage.from('background').getPublicUrl('bg.mp4');
        setBgVideoUrl(data.publicUrl);
      } catch (err) {
        console.error('Error fetching background video:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBackgroundVideo();
  }, []);

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <p className="text-gray-400">Loading background...</p>
          </div>
        ) : error ? (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <p className="text-red-500">Failed to load background</p>
          </div>
        ) : (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-100">
            <source src={bgVideoUrl} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Sword className="w-16 h-16 text-purple-400" />
          <Coins className="w-16 h-16 text-yellow-400 -ml-4" />
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-400">
          StickerHammer40k
        </h1>
        <p className="text-2xl mb-4 text-gray-300">Where Warhammer Meets Finance</p>
        <p className="text-lg mb-8 text-gray-400">Limited Edition 2"x2" Stickers</p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-full">
            <Timer className="w-5 h-5 text-yellow-400 mr-2" />
            <span>Get notified at launch and receive 20% off your first order!</span>
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
