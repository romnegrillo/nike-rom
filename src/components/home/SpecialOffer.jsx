import { Link } from 'react-router-dom';
import { ButtonSecondary } from '../common';
import { offer } from '../../assets/images';

const SpecialOffer = () => {
  return (
    <section className="max-container flex max-lg:flex-col-reverse gap-8">
      <div className="flex-1 flex justify-center items-center">
        <img src={offer} alt="offer" width={773} height={687} />
      </div>
      <div className="flex-1 flex flex-col gap-8 items-start justify-center">
        <h3 className="md:text-4xl text-3xl font-bold font-palanquin max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h3>

        <p className="lg:max-w-lg  text-slate-gray font-montserrat text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="lg:max-w-lg  text-slate-gray font-montserrat text-lg leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-4 max-lg:flex-col">
          <Link to="/products">
            <ButtonSecondary label="Learn More" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
