import P1Image from '../assets/phone_images/p1.png';
import P2Image from '../assets/phone_images/p2.png';
import P3Image from '../assets/phone_images/p3.png';

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      image: P1Image,
      title: "Space Marine",
      description: "A sticker that’s tougher than a Power Armour suit. Perfect for your phone, or facing down a Tyranid swarm!"
    },
    {
      image: P2Image,
      title: "Ork",
      description: "For the phone that needs a little bit more 'Waaagh!' and a whole lotta' chaos. Paint it red for extra speed!"
    },
    {
      image: P3Image,
      title: "Death Korps of Krieg",
      description: "Nothing says 'personalize your device' like a sticker from a regiment that never retreats (except when they do, but only to regroup!)."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">W40K in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
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
