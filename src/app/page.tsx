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
      <PastActivities />
      <OurTeam />
      <Footer />
    </main>
  );
}
