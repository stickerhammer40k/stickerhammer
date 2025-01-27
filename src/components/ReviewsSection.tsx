import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "John Doe",
    country: "United States",
    comment: "Can't wait to stick this on my laptop! The hype is real! 🚀",
    date: "2 days ago"
  },
  {
    name: "Sarah Smith",
    country: "United Kingdom",
    comment: "Pre-ordered! Hope it looks as cool on my phone as it does online! 📱",
    date: "1 week ago"
  },
  {
    name: "Carlos Hernandez",
    country: "Mexico",
    comment: "Ordered mine! The Space Marine design is everything I need! ⚔️",
    date: "4 days ago"
  },
  {
    name: "Emily Wang",
    country: "China",
    comment: "Just pre-ordered! Can’t wait to stick it on my tablet and represent! 🖥️",
    date: "3 weeks ago"
  },
  {
    name: "Michael Johnson",
    country: "Canada",
    comment: "Excited for these! Hoping they live up to the Warhammer hype! 🔥",
    date: "5 days ago"
  },
  {
    name: "Lena Müller",
    country: "Germany",
    comment: "Just placed my pre-order! My laptop is going to look epic! 🌟",
    date: "2 days ago"
  },
  {
    name: "Jack Lee",
    country: "Australia",
    comment: "Pre-ordered! These stickers are gonna be a game-changer for my gear! 💥",
    date: "1 week ago"
  },
  {
    name: "Katerina Petrov",
    country: "Russia",
    comment: "Can’t wait for my sticker to arrive! It’s going straight on my tablet! ⚡",
    date: "2 weeks ago"
  }
];

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 px-4 bg-gray-800/50 relative">
      <h2 className="text-4xl font-bold text-center mb-16">What Others Are Saying</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden relative rounded-lg aspect-video">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 mb-3 text-base">"{review.comment}"</p> {/* Increased text size */}
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-gray-400">{review.country}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{review.date}</div>
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

export default ReviewsSection;
