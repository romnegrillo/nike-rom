import { Nav } from '../components/common';
import { bigShoe1 } from '../assets/images';

const NotFound = () => {
  return (
    <main className="relative">
      <Nav />;
      <section className="padding max-container h-screen flex flex-col justify-center items-center">
        <div className="max-w-lg animate-pulse">
          <img src={bigShoe1} alt="shoe" className="object-contain" />
        </div>
        <h1 className="md:text-4xl text-3xl font-bold font-palanquin mt-16  text-coral-red">
          Page Not Found
        </h1>
      </section>
    </main>
  );
};

export default NotFound;
