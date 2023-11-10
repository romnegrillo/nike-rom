import { Routes, Route } from 'react-router-dom';

import { Nav, Footer } from '../components/common';
import { Home, Products, About, Contact, NotFound } from '../pages';

// TODO: Make the routes more reusable by being dependent from the hard coded data.

const AppRoutes = () => {
  return (
    <>
      {/* Navbar component is present individually on each page as it has different styles for each */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
