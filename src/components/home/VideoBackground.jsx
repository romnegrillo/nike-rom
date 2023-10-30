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
        playsInline
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <h1 className="text-white font-bold font-palanquin  lg:text-[72px] text-4xl leading-32 uppercase mb-8 text-center  md:max-w-4xl max-w-md">
            Outrun Yourself <br /> with{' '}
            <span className="text-coral-red">Nike</span>
          </h1>

          <p className="text-white font-montserrat lg:text-2xl md:text-xl text-lg mb-24 text-center  md:max-w-4xl max-w-sm">
            Push boundaries with the our latest running gear.
          </p>
          <ButtonPrimary label="Discover More" onClick={scrollToRef} />
        </div>
      </div>
    </section>
  );
};

export default VideoBackground;
