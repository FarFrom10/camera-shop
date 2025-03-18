import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import Breadcrumbs from './breadcrumbs';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras } from '../../mocks/mock-test';

describe('Component: Breadcrumbs', () => {
  const containerId = 'breadcrumbs';

  it('should render correctly', () => {
    const {withStoreCompnent} = withStore(
      <Breadcrumbs />,
      {cameras: {
        cameras: fakeCameras,
        promoCameras: fakePromoCameras,
        currentCamera: fakeCurrentCamera,

        isCamerasLoading: false,
        isPromoCamerasLoading: false,
        isCurrentCameraLoading: false,
      }
      });

    render(withRouter(withStoreCompnent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
