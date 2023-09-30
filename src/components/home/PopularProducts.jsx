import { PopularProductsCard } from '../common';
import { products } from '../../data';

const PopularProducts = () => {
  return (
    <section className="flex flex-col max-container justify-center max-sm:mt-12">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center items-center  w-full gap-14 ">
        {products.map((product, index) => (
          <PopularProductsCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
