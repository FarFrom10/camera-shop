import { render, screen } from '@testing-library/react';
import CatalogPage from './catalog-page';
import { withRouter, withStore } from '../../../utils/mock-component';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras } from '../../../mocks/mock-test';

describe('Component: CatalogPage', () => {
  const containerId = 'catalogPage';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogPage />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: fakePromoCameras,
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isCurrentCameraLoading: false,
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
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isCurrentCameraLoading: false,
      }
      });

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId).children.length).toBe(2);
  });
});
