import { ButtonPrimary } from '../common';

import { runningHero } from '../../assets/images';

const VideoBackground = ({ scrollToRef }) => {
  return (
    <section className="relative w-full h-screen">
      <video
        src={runningHero}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <h1
          className="text-white font-bold font-palanquin lg:text-8xl text-4xl uppercase mb-8 text-center  md:max-w-4xl max-w-md"
          data-aos="fade-down"
        >
          Outrun Yourself <br /> with{' '}
          <span className="text-coral-red">Nike</span>
        </h1>
        <p
          className="text-white font-montserrat lg:text-2xl md:text-xl text-lg mb-24 text-center  md:max-w-4xl max-w-sm"
          data-aos="fade-down"
        >
          Push boundaries with the our latest running gear.
        </p>

        <ButtonPrimary
          label="Discover More"
          onClick={scrollToRef}
          dataAos="fade-up"
        />
      </div>
    </section>
  );
};

export default VideoBackground;
