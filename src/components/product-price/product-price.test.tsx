import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import ProductPrice from './product-price';
import { PriceClass } from '../../const';

describe('Component: ProductPrice', () => {
  it('should render correctly', () => {
    const containerId = 'productPriceContainer';
    const {price} = fakeCurrentCamera;
    const expectedPriceClass = PriceClass.ProductCard;

    render(withRouter(
      <ProductPrice
        priceClass={expectedPriceClass}
        price={price}
      />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId)).toHaveClass(expectedPriceClass);
  });
});
