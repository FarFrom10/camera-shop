import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { fakeCurrentCamera, fakeReviews } from '../../mocks/mock-test';
import ProductReviews from './product-reviews';

describe('Component: ProductReviews', () => {
  const containerId = 'productReviews';
  const buttonsContainer = 'productReviewsButtons';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ProductReviews cameraId={fakeCurrentCamera.id}/>,
      {reviews: {
        reviews: fakeReviews,
        isReviewsLoading: false,
        isPostReviewLoading: false
      }
      });

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonsContainer)).toBeInTheDocument();
  });

  it('should not render button "showMore" if reviews.length === 0', () => {
    const {withStoreComponent} = withStore(
      <ProductReviews cameraId={fakeCurrentCamera.id}/>,
      {reviews: {
        reviews: [],
        isReviewsLoading: false,
        isPostReviewLoading: false
      }
      });

    render(withRouter(withStoreComponent));
    const buttonsContainerLength = screen.getByTestId(buttonsContainer).children.length;

    expect(buttonsContainerLength).toBe(0);
  });
});
