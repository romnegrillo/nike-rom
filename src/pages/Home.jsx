import { Nav, Footer } from '../components/common';

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
  return (
    <main className="relative">
      <Nav navColor="text-white" />
      <VideoBackground />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
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
