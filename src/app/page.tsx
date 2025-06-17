import PastActivities from '@/components/PastActivities';
import HeroSection from '../components/HeroSection';
import Footer from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PastActivities />
      {/* Next section here, will appear below the cloud */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Next Section Here</h2>
          {/* Your content */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
