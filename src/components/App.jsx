// Core
import { Route, Routes } from 'react-router-dom';

// Pages
import { Home, About, Products, NotFound, ProductDetails } from 'pages';

// Components
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

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
