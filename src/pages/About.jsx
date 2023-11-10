import { Nav, ScrollToTop } from '../components/common';
import {
  AboutHero,
  FAQ,
  PrivacyPolicy,
  PaymentPolicy,
} from '../components/about';

const About = () => {
  return (
    <main className="relative min-h-screen">
      <ScrollToTop />

      <Nav />

      <AboutHero />

      <section className="max-container p-8 ">
        <FAQ />
      </section>

      <section className="max-container p-8 ">
        <PrivacyPolicy />
      </section>

      <section className="max-container p-8 ">
        <PaymentPolicy />
      </section>
    </main>
  );
};

export default About;
