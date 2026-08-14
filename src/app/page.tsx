

import HeroSection from '@/components/Home/HeroSection';
import HomeAboutSection from '@/components/Home/HomeAboutSection';
import ServicesOverview from '@/components/Home/ServicesOverview';
import SolarInstallationSection from '@/components/Home/SolarInstallationSection';
import ModernTechSection from '@/components/Home/WhyChooseUs';
import IntelligenceSection from '@/components/Home/IntelligenceSection';
import ClientsSection from '@/components/Home/ClientsSection';
import CTASection from '@/components/Home/CTASection';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <HomeAboutSection />
      
      <ServicesOverview />
      <SolarInstallationSection />
      <ClientsSection />
      <ModernTechSection />
      <IntelligenceSection />
      <CTASection />
    </main>
  );
}
