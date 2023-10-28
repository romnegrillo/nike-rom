import { aboutHeroNoBg } from '../../assets/images';

const AboutHero = () => {
  return (
    <div className="flex flex-col max-container padding justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold font-palanquin mt-16 self-start">
        Beyond the Logo, <span className="text-coral-red">Nike Story</span>
      </h1>

      <div className="flex lg:flex-row flex-col justify-center items-center mt-8">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={aboutHeroNoBg}
            alt="about hero image"
            className="object-contain w-full"
          />
        </div>

        <div className="flex flex-col flex-1 mb-8">
          <p className="font-montserrat text-slate-gray mb-4 leading-7">
            Founded in 1964 as Blue Ribbon Sports in Beaverton, Oregon, Bill
            Bowerman and Phil Knight's vision transformed a small shoe
            distributor into today's global titan: Nike, Inc. From these
            grassroots beginnings, Nike rapidly evolved, intertwining its
            narrative with the highs and lows of sports history.
          </p>

          <p className="font-montserrat text-slate-gray mb-4 leading-7">
            The iconic Swoosh symbolizes more than just our brand; it represents
            a promise of innovation, resilience, and excellence. This emblem
            propels athletes from local playgrounds to Olympic stadiums. Our
            journey, from a car's trunk to worldwide stadiums, showcases our
            commitment to dreamers everywhere. As we stride forward, we remain
            devoted to designing the perfect blend of style and performance,
            nurturing a sustainable future, and igniting the athletic spirit
            globally.
          </p>

          <p className="font-montserrat text-slate-gray mb-4 leading-7">
            At Nike, we believe sport holds transformative power, and our
            mission is clear:
          </p>
        </div>
      </div>

      <p className="font-montserrat text-slate-gray text-2xl  leading-7 font-bold lg:text-center max-w-4xl">
        To bring inspiration and innovation to every athlete in the world. And
        remember, If you have a<span className="text-coral-red"> body</span>,
        you're an <span className="text-coral-red">athlete</span>.
      </p>
    </div>
  );
};

export default AboutHero;
