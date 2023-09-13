import { Scrollbars } from 'react-custom-scrollbars-2';

import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';

import Nav from './components/Nav';

const App = () => {
  return (
    <main className="relative">
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
        <Nav />
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
        <section className=" bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </Scrollbars>
    </main>
  );
};

export default App;
