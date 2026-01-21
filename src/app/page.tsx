import EnquirySection from '@/components/shared/EnquirySection';
import homePageData from '@/utils/homePageData.json';
import servicesData from '@/utils/servicesData.json';
import HeroSection from '@/components/home/hero-section';
import StateSection from '@/components/home/state-section';
import TrustedBySection from '@/components/home/trustedby-section';
import OurServices from '@/components/home/our-services';
import FeaturesSection from '@/components/home/features-section';
import HowItWorks from '@/components/home/how-it-works';

export default function Home() {
  const { hero, stats, trustedBy, features, howItWorks, aiCoPilot, testimonials, cta, faq } = homePageData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection hero={hero} />
      <StateSection stats={stats} />
      {/* <TrustedBySection trustedBy={trustedBy} /> */}
      <OurServices servicesData={servicesData} />
      <FeaturesSection features={features} />
      <HowItWorks howItWorks={howItWorks} />
      {/* CTA Section */}
      <EnquirySection />

    </div>
  );
}
