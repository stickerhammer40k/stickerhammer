import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "John",
    country: "United States",
    comment: "Just signed up! Can’t wait to slap these stickers on my laptop and gaming rig! 🚀",
    date: "2 days ago"
  },
  {
    name: "Sarah",
    country: "United Kingdom",
    comment: "Registered and counting down the days! My phone case is going to look so epic! 📱",
    date: "1 week ago"
  },
  {
    name: "Carlos",
    country: "Mexico",
    comment: "Signed up immediately! The Space Marine design is going to look insane on my water bottle! ⚔️",
    date: "4 days ago"
  },
  {
    name: "Emily",
    country: "China",
    comment: "Joined the waitlist! My tablet and notebook are begging for these stickers! 🖥️",
    date: "3 weeks ago"
  },
  {
    name: "Michael",
    country: "Canada",
    comment: "Registered and hyped! These stickers are going to level up my gear! 🔥",
    date: "5 days ago"
  },
  {
    name: "Lena",
    country: "Germany",
    comment: "Signed up and ready! My laptop is about to get the Warhammer glow-up it deserves! 🌟",
    date: "2 days ago"
  },
  {
    name: "Jack",
    country: "Australia",
    comment: "Joined the club! Can’t wait to deck out my gaming setup with these stickers! 💥",
    date: "1 week ago"
  },
  {
    name: "Katerina",
    country: "Russia",
    comment: "Registered and excited! My tablet and sketchbook are getting a Warhammer makeover! ⚡",
    date: "2 weeks ago"
  }
];

// Function to shuffle the reviews array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shuffledReviews, setShuffledReviews] = useState([]);

  // Shuffle reviews on component mount
  useEffect(() => {
    setShuffledReviews(shuffleArray([...reviews]));
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % shuffledReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [shuffledReviews]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % shuffledReviews.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + shuffledReviews.length) % shuffledReviews.length);

  return (
    <section className="py-20 px-4 bg-gray-800/50 relative">
      <h2 className="text-4xl font-bold text-center mb-16">What Others Are Saying</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden relative rounded-lg aspect-video">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {shuffledReviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 mb-3 text-base">"{review.comment}"</p>
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