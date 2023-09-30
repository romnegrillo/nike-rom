import { Routes, Route } from 'react-router-dom';

import { Home, Products, About, Contact, NotFound } from '../pages';

// TODO: Make the routes more reusable by being dependent from the hard coded data.

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
