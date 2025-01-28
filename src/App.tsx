import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import ShowcaseSection from './components/ShowcaseSection';
import NotifyMeSection from './components/NotifyMeSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <ProductCarousel />
      <ShowcaseSection />
      <NotifyMeSection />
      <ReviewsSection />
      <Footer />
      <ExitPopup />
    </div>
  );
}

export default App;