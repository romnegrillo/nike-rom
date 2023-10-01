import { useState } from 'react';

import { Nav, PopularProductsCard, Footer } from '../components/common';
import { FilterCheckboxGroup, FilterRadioGroup } from '../components/products';

import {
  products as productList,
  productSortBy,
  productCategoryFilters,
} from '../data';

import sampleBlob from '../assets/images/sampleBlob.png';

const Products = () => {
  const [products, setProducts] = useState(productList);
  const [sortBy, setSortBy] = useState(productSortBy[0].value);
  const [filterBy, setFilterBy] = useState(productCategoryFilters[0].value);

  const numProducts = products.length;

  return (
    <main
      className="relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${sampleBlob})` }}
    >
      <Nav />
      <section className="padding max-container min-h-screen">
        <h1 className="text-4xl font-bold font-palanquin mt-16">
          Discover Your <span className="text-coral-red">Perfect Pair</span>
        </h1>

        <div className="flex justify-center items-start pt-8 relative">
          <div className="w-1/5 sticky top-[5vh] max-xl:hidden ">
            <p className="text-2xl font-palanquin">Filter</p>
            <p className="text-slate-gray mt-4">{numProducts} items found</p>

            <div className="mt-8">
              <FilterRadioGroup
                values={productSortBy}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            <div className="mt-8">
              <FilterCheckboxGroup
                values={productCategoryFilters}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center w-4/5 items-center gap-14">
            {products.map((product, index) => (
              <PopularProductsCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Products;
