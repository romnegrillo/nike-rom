import { Nav, PopularProductsCard } from '../components/common';
import { products } from '../data';
import sampleBlob from '../assets/images/sampleBlob.png';

const Products = () => {
  return (
    <main
      className="relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${sampleBlob})` }}
    >
      <Nav />
      <section className="padding max-container">
        <h1 className="text-4xl font-bold font-palanquin mt-16">
          Discover Your <span className="text-coral-red">Perfect Pair</span>
        </h1>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center items-center  w-full gap-14 ">
          {products.map((product, index) => (
            <PopularProductsCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
