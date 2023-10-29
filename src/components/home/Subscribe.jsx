import { ButtonPrimary } from '../common';

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col">
      <div
        className="max-w-md max-lg:mb-12 max-lg:max-w-max"
        data-aos="fade-right"
      >
        <h3 className="md:text-4xl text-3xl font-palanquin font-bold text-center">
          Sign Up for <span className="text-coral-red">Updates</span> &{' '}
          <span>Newsletter</span>
        </h3>
      </div>

      <div
        className="flex border w-[600px]  border-slate-gray rounded-full px-7 py-4 max-lg:w-full mb-4"
        data-aos="fade-left"
      >
        <input
          type="text"
          className="flex-1 border-none outline-none   text-slate-gray"
          placeholder="customer@email.com"
        ></input>
        <div className="max-md:hidden">
          <ButtonPrimary label="Sign Up" />
        </div>
      </div>

      <div className="md:hidden flex w-full" data-aos="fade-right">
        <ButtonPrimary label="Sign Up" className="w-full" />
      </div>
    </section>
  );
};

export default Subscribe;
