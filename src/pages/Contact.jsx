import { Nav, Footer, ScrollToTop } from '../components/common';
import { ContactForm } from '../components/contact';

import { contactReasons } from '../data';

const Contact = () => {
  return (
    <main className="relative">
      <ScrollToTop />

      <Nav />

      <section className="max-container padding min-h-screen flex flex-col">
        <h1 className="text-4xl font-bold font-palanquin mt-16 self-start mb-4">
          Connect With Us
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mb-8 leading-7">
          At Nike, every stride, leap, and sprint you take is a journey we're
          proud to be a part of. Your feedback, questions, and stories drive our
          innovation and inspire our community.
        </p>

        <div className="flex lg:flex-row flex-col flex-1 items-center">
          <ContactForm />

          <div className="flex flex-1 flex-col">
            <div>
              {contactReasons.map((contactReason, index) => (
                <div key={index} className="flex flex-col  mb-8">
                  <h3 className="font-palanquin font-semibold text-lg mb-2">
                    {contactReason.title}
                  </h3>
                  <p className="text-slate-gray font-montserrat">
                    {contactReason.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
