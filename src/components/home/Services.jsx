import { ServicesCard } from '../common';

import { services } from '../../data';

const Services = () => {
  return (
    <section className="flex justify-center gap-8 max-container flex-wrap">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </section>
  );
};

export default Services;
