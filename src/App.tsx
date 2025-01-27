import React from 'react';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import ShowcaseSection from './components/ShowcaseSection';
import PreOrderSection from './components/PreOrderSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <ProductCarousel />
      <ShowcaseSection />
      <PreOrderSection />
      <ReviewsSection />
      <Footer />
      <ExitPopup />
    </div>
  );
}

export default App;