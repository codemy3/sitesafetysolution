import HeroSection from '@/components/Home/HeroSection';
import MarqueeSection from '@/components/Home/MarqueeSection';

import ServicesOverview from '@/components/Home/ServicesOverview';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import TestimonialSection from '@/components/Home/TestimonialSection';
import CTASection from '@/components/Home/CTASection';

export default function HomePage() {
  return (
    <main className="overflow-hidden min-h-screen bg-white">
      <HeroSection />
      <MarqueeSection />

      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
