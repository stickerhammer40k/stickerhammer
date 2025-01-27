import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SmImage from '../assets/images/Sm.jpg';
import OrksImage from '../assets/images/Ork.jpg';
import DkkImage from '../assets/images/Dkk.jpg';

const products = [
  {
    title: "Space Marine Traders",
    description: "In the grim darkness of the far future, there is only profit!",
    image: SmImage,
    price: "$4.99",
  },
  {
    title: "WAAAGH Street Orks",
    description: "WAAAGH! Let’s loot some profits!",
    image: OrksImage,
    price: "$4.99",
  },
  {
    title: "Death Korps Dividends",
    description: "The only certainty is sacrifice... and profit.",
    image: DkkImage,
    price: "$4.99",
  }
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

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
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
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