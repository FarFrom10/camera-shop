import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { fakeReviews } from '../../mocks/mock-test';
import ProductReviews from './product-reviews';

describe('Component: ProductReviews', () => {
  const containerId = 'productReviews';
  const buttonsContainer = 'productReviewsButtons';

  it('should render correctly', () => {
    const {withStoreCompnent} = withStore(
      <ProductReviews/>,
      {reviews: {
        reviews: fakeReviews,
        isReviewsLoading: false
      }
      });

    render(withRouter(withStoreCompnent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonsContainer)).toBeInTheDocument();
  });

  it('should not render button "showMore" if reviews.length === 0', () => {
    const {withStoreCompnent} = withStore(
      <ProductReviews/>,
      {reviews: {
        reviews: [],
        isReviewsLoading: false
      }
      });

    render(withRouter(withStoreCompnent));
    const buttonsContainerLength = screen.getByTestId(buttonsContainer).children.length;

    expect(buttonsContainerLength).toBe(0);
  });
});
