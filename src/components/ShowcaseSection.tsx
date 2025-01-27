import React from 'react';

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80",
      title: "MacBook Setup",
      description: "Perfect for your trading battlestation"
    },
    {
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80",
      title: "iPhone Customization",
      description: "Show off your Warhammer pride"
    },
    {
      image: "https://images.unsplash.com/photo-1544199721-1780c5fd4343?auto=format&fit=crop&q=80",
      title: "Notebook Collection",
      description: "For your trading strategies"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Stickers in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;