import { useEffect, useState } from 'react';

import { Nav, PopularProductsCard, Footer } from '../components/common';
import { FilterCheckboxGroup, FilterRadioGroup } from '../components/products';

import {
  products as productList,
  productSortValues,
  productCategoryFilters,
} from '../data';

import arraysEqualExcludingValue from '../utils/arraysEqualExcludingValue';

import sampleBlob from '../assets/images/sampleBlob.png';

const Products = () => {
  const allFilters = productCategoryFilters.map(
    (productCategoryFilter) => productCategoryFilter.value
  );
  const allSortBy = productSortValues.map(
    (productSortValue) => productSortValue.value
  );

  const [products, setProducts] = useState(productList);
  const [sortBy, setSortBy] = useState(allSortBy[0]);
  const [filterBy, setFilterBy] = useState(
    productCategoryFilters.map((filter) => filter.value)
  );
  let numProducts = products.length;

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterBy = (e) => {
    const { value, checked } = e.target;

    // "All" is checked, so we check everything else.
    if (checked && value === 'all') {
      setFilterBy(allFilters);
    }
    // "All" is unchecked, so we remove everything else.
    else if (!checked && value === 'all') {
      setFilterBy([]);
    }
    // Other filters except 'All' is checked.
    else if (checked) {
      // If all filters except 'All' are already checked, we check 'All" also.
      if (arraysEqualExcludingValue([...filterBy, value], allFilters, 'all')) {
        setFilterBy((prevFilterBy) => [...prevFilterBy, value, 'all']);
      } else {
        setFilterBy((prevFilerBy) => [...prevFilerBy, value]);
      }
    }
    // Other filters except 'All is unchecked.
    // We always uncheck 'All' here.
    else {
      setFilterBy(
        filterBy.filter((filter) => filter !== value && filter !== 'all')
      );
    }
  };

  useEffect(() => {
    const updateProducts = () => {
      let currentProducts = [...productList];

      // Sorting.
      if (sortBy === 'featured') {
        currentProducts = productList;
      } else if (sortBy === 'highestToLowest') {
        currentProducts = currentProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'lowestToHighest') {
        currentProducts = currentProducts.sort((a, b) => a.price - b.price);
      }

      // Filtering.
      currentProducts = currentProducts.filter((currentProduct) =>
        filterBy.includes(currentProduct.typeValue)
      );

      setProducts(currentProducts);
    };
    updateProducts();
  }, [sortBy, filterBy]);

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
                values={productSortValues}
                sortBy={sortBy}
                onSortBy={handleSortBy}
              />
            </div>

            <div className="mt-8">
              <FilterCheckboxGroup
                values={productCategoryFilters}
                filterBy={filterBy}
                onFilterBy={handleFilterBy}
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
