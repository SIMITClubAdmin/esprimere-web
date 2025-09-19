import PastActivities from '@/components/PastActivities';
import HeroSection from '../components/HeroSection';
import CurrentActivities from '@/components/CurrentActitivites';
import OurTeam from '@/components/OurTeam';
import Footer from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="relative">
        <CurrentActivities />

        {/* Torn Separator */}
        <div className="absolute -bottom-30 left-0 w-full h-[200px] overflow-hidden z-20">
          <img
            src="/separator/long-torn-paper-brown.svg"
            alt="Section Separator"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative -mt-1"> {/* pull PastActivities up under torn edge */}
        <PastActivities />
      </div>

      <OurTeam />
      <Footer />
    </main>
  );
}