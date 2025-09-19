import PastActivities from '@/components/PastActivities';
import HeroSection from '../components/HeroSection';
import CurrentActivities from '@/components/CurrentActitivites';
import OurTeam from '@/components/OurTeam';
import Footer from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CurrentActivities />

      <div className="w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          {/* Top color (CurrentActivities bg) */}
          <rect width="1200" height="120" className="fill-[#524030]" /> 
          {/* Torn edge filled with bottom color */}
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            className="fill-[#D5CEB8]"
          />
        </svg>
      </div>

      <PastActivities />
      <OurTeam />
      <Footer />
    </main>
  );
}
