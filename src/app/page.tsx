import PastActivities from '@/components/PastActivities';
import HeroSection from '../components/HeroSection';
import OurTeam from '@/components/OurTeam';
import Footer from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PastActivities />
      <OurTeam />
      <Footer />
    </main>
  );
}
