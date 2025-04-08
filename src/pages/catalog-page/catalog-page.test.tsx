import { render, screen } from '@testing-library/react';
import CatalogPage from './catalog-page';
import { withRouter, withStore } from '../../utils/mock-component';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras } from '../../mocks/mock-test';
import { SortByOrder, SortByType } from '../../const';

describe('Component: CatalogPage', () => {
  const containerId = 'catalogPage';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogPage />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: fakePromoCameras,
        similarCameras: fakeCameras,
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isSimilarCamerasLoading: false,
        isCurrentCameraLoading: false,
      },
      sort: {
        sortType: SortByType.Price,
        sortOrder: SortByOrder.Up,
      }
      });

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should not render "BigBanner" component if "promoCameras" length is 0', () => {
    const {withStoreComponent} = withStore(
      <CatalogPage />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: [],
        similarCameras: fakeCameras,
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isSimilarCamerasLoading: false,
        isCurrentCameraLoading: false,
      },
      sort: {
        sortType: SortByType.Price,
        sortOrder: SortByOrder.Up,
      }
      });

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId).children.length).toBe(2);
  });
});
