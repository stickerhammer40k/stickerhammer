import React from 'react';

const reviews = [
  {
    name: "Brother Maximus",
    comment: "Can't wait to stick these on my trading terminal! For the Emperor! 🚀",
    date: "2 days ago"
  },
  {
    name: "Warboss Stonkz",
    comment: "WAAAGH! DIS GONNA MAKE ME TRADES GO FASTA! 💪",
    date: "1 day ago"
  },
  {
    name: "Commissar Diamond",
    comment: "These stickers will boost morale in the trading trenches! 💎",
    date: "3 days ago"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What Others Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-4">"{review.comment}"</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">{review.name}</span>
                <span className="text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;