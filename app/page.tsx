import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <div className="w-11/12 lg:max-w-[1000px] mx-auto">
      <Navbar />
        <Hero />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
