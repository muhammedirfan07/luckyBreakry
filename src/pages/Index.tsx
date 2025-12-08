/* =====================================================
   LUXURY BAKERY - MAIN INDEX PAGE
   Premium artisan bakery landing page
   ===================================================== */

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import MenuSection from '@/components/MenuSection';
import DeliverySection from '@/components/DeliverySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Full Viewport */}
      <HeroSection />

      {/* Welcome Section with Category Buttons */}
      <WelcomeSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Delivery Section */}
      <DeliverySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
