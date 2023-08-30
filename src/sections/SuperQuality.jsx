import ButtonPrimary from '../components/ButtonPrimary';

import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section className="flex max-container max-sm:flex-col gap-4">
      <div className="flex flex-1 flex-col justify-center items-start gap-8">
        <h3 className="text-4xl font-bold font-palanquin max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{' '}
          Shoes
        </h3>

        <p className="lg:max-w-lg  text-slate-gray font-montserrat text-lg leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="lg:max-w-lg  text-slate-gray font-montserrat text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <ButtonPrimary label="View Details" />
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe" />
      </div>
    </section>
  );
};

export default SuperQuality;
