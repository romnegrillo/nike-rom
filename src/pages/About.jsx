import { Nav, Footer } from '../components/common';
import { aboutHeroNoBg } from '../assets/images';

const About = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding max-container">
        <h1 className="text-4xl font-bold font-palanquin mt-16">
          Beyond the Logo, <span className="text-coral-red">Nike Story</span>
        </h1>
        <div className="min-h-screen">
          <div className="flex justify-center items-center mt-8">
            <div className="flex-1 flex justify-center items-center overflow-x-visible">
              <img src={aboutHeroNoBg} alt="about hero image" width={1000} />
            </div>

            <p className="flex-1 font-palanquin text-slate-gray">
              Embarking on a journey since 1964, Nike has eternally stood at the
              paramount of not only creating athletic wear but crafting a tale
              of innovation, evolution, and an unbreakable spirit to inspire
              every individual that encounters its legacy. Born from a simple
              idea of creating superior athletic footwear, the brand now has
              left an indelible mark on the global stage of sports and
              lifestyle.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
