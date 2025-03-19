import { render, screen } from '@testing-library/react';
import ProductPage from './product-page';
import { withRouter, withStore } from '../../../utils/mock-component';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras, fakeReviews } from '../../../mocks/mock-test';

describe('Component: ReviewsList', () => {
  const containerId = 'productPageContent';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ProductPage />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: fakePromoCameras,
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isCurrentCameraLoading: false,
      },
      reviews: {
        reviews: fakeReviews,

        isReviewsLoading: false,
      },
      });
    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should not render component if data is loading', () => {
    const {withStoreComponent} = withStore(
      <ProductPage />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: fakePromoCameras,
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isCurrentCameraLoading: true,
      },
      reviews: {
        reviews: fakeReviews,

        isReviewsLoading: false,
      },
      });
    render(withRouter(withStoreComponent));

    expect(screen.queryByTestId(containerId)).not.toBeInTheDocument();
  });

  it('should return "NotFoundPage" if data loaded but "currentCamera" is null', () => {
    const notFoundPageText = '404: Страница не найдена';

    const {withStoreComponent} = withStore(
      <ProductPage />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: fakePromoCameras,
        currentCamera: null,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isCurrentCameraLoading: false,
      },
      reviews: {
        reviews: fakeReviews,

        isReviewsLoading: false,
      },
      });
    render(withRouter(withStoreComponent));

    expect(screen.queryByTestId(containerId)).not.toBeInTheDocument();
    expect(screen.getByText(notFoundPageText)).toBeInTheDocument();
  });
});
