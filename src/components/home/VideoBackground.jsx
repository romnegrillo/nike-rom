import { ButtonPrimary } from '../common';

import { runningHero } from '../../assets/images';

const VideoBackground = () => {
  return (
    <section className="relative w-full h-screen">
      <video
        src={runningHero}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover blur-sm"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold font-palanquin lg:text-8xl text-4xl uppercase mb-8 text-center  md:max-w-4xl max-w-md">
          Outrun Yourself with <span className="text-coral-red">Nike</span>
        </h1>
        <p className="text-white font-montserrat md:text-2xl text-xl mb-24 text-center  md:max-w-4xl max-w-sm">
          Push boundaries with the our latest running gear.
        </p>

        <ButtonPrimary label="Discover More" />
      </div>
    </section>
  );
};

export default VideoBackground;
