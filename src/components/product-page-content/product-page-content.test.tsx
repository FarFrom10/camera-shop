import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import { fakeCameras, fakeCurrentCamera } from '../../mocks/mock-test';
import ProductPageContent from './product-page-content';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: ProductPageContent', () => {
  it('should render correctly', () => {
    const infoContainerId = 'productPageInfoSection';
    const reviewsContainerId = 'productPageReviewsSection';
    const { withStoreComponent } = withStore(
      <ProductPageContent onModalContactMeOpen={mockEmptyCallback} currentCamera={fakeCurrentCamera} similarCameras={fakeCameras}/>
      , makeFakeStore());

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(infoContainerId)).toBeInTheDocument();
    expect(screen.getByTestId(reviewsContainerId)).toBeInTheDocument();
  });
});
