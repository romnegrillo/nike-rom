import { Nav, PopularProductsCard } from '../components/common';
import { products } from '../data';

const Products = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding max-container">
        <h1>Products</h1>
      </section>
    </main>
  );
};

export default Products;
