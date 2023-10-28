import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonPrimary } from '../common';
import { ShoeCard } from '../common';

import { arrowRight } from '../../assets/icons';
import { shoes, statistics } from '../../data';
import { bigShoe1 } from '../../assets/images';

const Hero = ({ myRef }) => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="hero"
      ref={myRef}
      className="flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container mx-auto"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-10"
        data-aos="fade-right"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>

        <h1 className="mt-10 font-palanquin lg:text-8xl text-4xl font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          <span> Shoes</span>
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life.
        </p>

        <Link to="/products">
          <ButtonPrimary label="Shop Now" iconUrl={arrowRight} />
        </Link>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section
        className="relative flex flex-1 justify-center items-center  xl:min-h-screen max-xl:py-40 bg-primary w-full"
        data-aos="fade-left"
      >
        <div className="">
          <img
            src={bigShoeImage}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
        </div>

        <div className="flex flex-row justify-center items-center absolute max-sm:px-6 bottom-5 gap-4 sm:gap-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={() => {
                  setBigShoeImage(shoe.bigShoe);
                }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
