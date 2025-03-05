import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      imagePath: "p1.png",
      title: "Space Marine",
      description: "A sticker that's tougher than a Power Armour suit. Perfect for your phone, or facing down a Tyranid swarm!"
    },
    {
      imagePath: "p2.png",
      title: "Ork",
      description: "For the phone that needs a little bit more 'Waaagh!' and a whole lotta' chaos. Paint it red for extra speed!"
    },
    {
      imagePath: "p3.png",
      title: "Death Korps of Krieg",
      description: "Nothing says 'personalize your device' like a sticker from a regiment that never retreats (except when they do, but only to regroup!)."
    }
  ];

  const [imageUrls, setImageUrls] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const urls = {};
        
        showcaseItems.forEach(item => {
          const { data } = supabase.storage.from('phone_images').getPublicUrl(item.imagePath);
          urls[item.imagePath] = data.publicUrl;
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

  const handleImageError = (imagePath) => {
    console.error(`Failed to load image: ${imagePath}`);
    setImageLoadErrors(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

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
        Loading showcase items...
      </div>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Stickerhammer40K in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              {imageLoadErrors[item.imagePath] ? (
                <div className="w-full h-64 flex items-center justify-center bg-gray-900">
                  <p className="text-red-500">Failed to load image</p>
                  <p className="text-sm mt-2">{imageUrls[item.imagePath]}</p>
                </div>
              ) : (
                <img 
                  src={imageUrls[item.imagePath]} 
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(item.imagePath)}
                />
              )}
              <div className="mt-4 p-4">
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