// Core
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import { SharedLayout } from './SharedLayout';

const Mission = lazy(() =>
  import('./Mission').then(module => {
    return { ...module, default: module.Mission };
  })
);
const Team = lazy(() =>
  import('./Team').then(module => {
    return { ...module, default: module.Team };
  })
);
const Reviews = lazy(() =>
  import('./Reviews').then(module => {
    return { ...module, default: module.Reviews };
  })
);

// Pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ProductDetails = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
