import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { fakeCurrentCamera, fakeReviews } from '../../mocks/mock-test';
import ProductPageContent from './product-page-content';

describe('Component: ProductPageContent', () => {
  it('should render correctly', () => {
    const infoContainerId = 'productPageInfoSection';
    const reviewsContainerId = 'productPageReviewsSection';
    const {withStoreComponent} = withStore(
      <ProductPageContent camera={fakeCurrentCamera}/>,
      {reviews: {
        reviews: fakeReviews,
        isReviewsLoading: false
      }
      });

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(infoContainerId)).toBeInTheDocument();
    expect(screen.getByTestId(reviewsContainerId)).toBeInTheDocument();
  });
});
