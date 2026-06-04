import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import TomorrowSection from './sections/TomorrowSection';
import ProgressSection from './sections/ProgressSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import NewsletterSection from './sections/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TomorrowSection />
        <ProgressSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
