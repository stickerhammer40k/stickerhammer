import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExitPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md relative">
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-4">Wait! Don't Miss Out!</h3>
        <p className="text-gray-300 mb-6">
          Pre-order now and get 10% off your first sticker pack! Join the WAAAGH! of satisfied customers.
        </p>
        <button 
          onClick={() => {
            setShowPopup(false);
            document.getElementById('pre-order-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 hover:from-purple-600 hover:to-yellow-600 transition-colors"
        >
          Get 10% Off Now!
        </button>
      </div>
    </div>
  );
};

export default ExitPopup;