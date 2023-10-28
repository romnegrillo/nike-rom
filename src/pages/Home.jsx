import { useEffect, useRef } from 'react';
import AOS from 'aos';

import { Nav, Footer, ScrollToTop } from '../components/common';

import {
  CustomerReviews,
  Hero,
  VideoBackground,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from '../components/home';

const Home = () => {
  const myRef = useRef(null);

  const scrollToRef = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="relative">
      <ScrollToTop />

      <Nav navColor="text-white" />

      <VideoBackground scrollToRef={scrollToRef} />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero myRef={myRef} />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
