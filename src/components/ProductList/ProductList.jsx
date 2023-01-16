// Core
import { Link, useLocation } from 'react-router-dom';

// Styles
import { Container, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <Container>
      {products.map(({ id, name }) => (
        <CardWrapper key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="name" />
            <ProductName>{name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
