import { Routes, Route } from 'react-router-dom';

import { Home, Products, Help } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default AppRoutes;
