// Core
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Styles
import { Header, Logo, StyledLink } from './SharedLayout.styled';
import { Layout } from './../Layout';
import { GlobalStyle } from './../GlobalStyle';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>

      <GlobalStyle />
    </Layout>
  );
};
