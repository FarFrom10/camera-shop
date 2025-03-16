import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ProductCardInfo from './product-card-info';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Component: ProductCardInfo', () => {
  it('should render correctly', () => {
    const containerId = 'productCardInfoContainer';
    const {name, price, rating,reviewCount} = fakeCurrentCamera;

    render(withRouter(
      <ProductCardInfo
        name={name}
        rating={rating}
        reviewCount={reviewCount}
        price={price}
      />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
