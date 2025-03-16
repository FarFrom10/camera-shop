import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ProductRating from './product-rating';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import { ProductRatingClass } from '../../const';


describe('Component: ProductRating', () => {
  const containerId = 'productRatingContainer';
  const rateCountId = 'rateCount';
  const {rating ,reviewCount} = fakeCurrentCamera;
  const expectedClass = ProductRatingClass.ProductPage;

  it('should render correctly', () => {
    const expectedRatingText = `Рейтинг: ${rating}`;

    render(withRouter(
      <ProductRating
        ratingNumber={rating}
        reviewCount={reviewCount}
        ratingClass={expectedClass}
      />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId)).toHaveClass(expectedClass);
    expect(screen.getByTestId(rateCountId)).toBeInTheDocument();
    expect(screen.getByText(expectedRatingText)).toBeInTheDocument();
  });

  it('should render correctly with "disableReviewCount" prop', () => {
    render(withRouter(
      <ProductRating
        ratingNumber={rating}
        reviewCount={reviewCount}
        ratingClass={expectedClass}
        disableReviewCount
      />));

    expect(screen.queryByTestId(rateCountId)).not.toBeInTheDocument();
  });
});
