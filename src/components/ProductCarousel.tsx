import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const products = [
  {
    title: "Space Marine Traders",
    description: "In the grim darkness of the far future, there is only profit!",
    imagePath: "Sm.jpg",  
    price: "$4",
  },
  {
    title: "WAAAGH Street Orks",
    description: "WAAAGH! Let's loot some profits!",
    imagePath: "Ork.jpg",  
    price: "$4",
  },
  {
    title: "Death Korps Dividends",
    description: "The only certainty is sacrifice... and profit.",
    imagePath: "Dkk.jpg",  
    price: "$4",
  }
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageUrls, setImageUrls] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const urls = {};
        
        products.forEach(product => {
          const { data } = supabase.storage.from('carousell_images').getPublicUrl(product.imagePath);
          urls[product.imagePath] = data.publicUrl;
        });
        
        setImageUrls(urls);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading images:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageError = (imagePath) => {
    console.error(`Failed to load image: ${imagePath}`);
    setImageLoadErrors(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>Error loading images: {error}</p>
        <p className="mt-2">Supabase URL: {import.meta.env.VITE_SUPABASE_URL}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-20">
        Loading products...
      </div>
    );
  }

  return (
    <section className="py-20 px-4 bg-gray-800/50 relative">
      <h2 className="text-4xl font-bold text-center mb-16">Our Limited Edition Collection</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden relative rounded-lg aspect-video">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="relative aspect-video">
                  {imageLoadErrors[product.imagePath] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <p className="text-red-500">Failed to load image</p>
                      <p className="text-sm mt-2">{imageUrls[product.imagePath]}</p>
                    </div>
                  ) : (
                    <img 
                      src={imageUrls[product.imagePath]} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(product.imagePath)}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-300">{product.description}</p>
                    <p className="text-yellow-400 font-bold mt-2">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
