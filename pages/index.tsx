import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false });
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const HeroParallaxDemo = dynamic(() => import('../components/hero-parallax-demo'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const FeaturedProjects = dynamic(() => import('../components/FeaturedProjects'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const GlowingEffectDemo = dynamic(() => import('../components/glowing-effect-demo'), { ssr: false });
const CertificatesDemo = dynamic(() => import('../components/certificates-demo'), { ssr: false });
const Leadership = dynamic(() => import('../components/Leadership'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="bg-dark-950">
      <Navigation />
      <HeroParallaxDemo />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      
      {/* Awards & Achievements Section */}
      <section className="py-20 md:py-32 bg-dark-900 border-t border-white/5 relative z-10" id="achievements">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Achievements</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Recognizing my hackathon wins, national rankings, and competitions.
            </p>
          </div>
          <GlowingEffectDemo />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32 bg-dark-950 border-t border-white/5 relative z-10" id="certifications">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Certifications</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional training, platform credentials, and skill validations.
            </p>
          </div>
          <CertificatesDemo />
        </div>
      </section>

      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
