import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import CatalogPageContent from './catalog-page-content';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras } from '../../mocks/mock-test';

describe('Component: CatalogPageContent', () => {
  const containerId = 'catalogPageContent';
  const expectedTitleText = 'Каталог фото- и видеотехники';

  it('should render correctly', () => {
    const {withStoreCompnent} = withStore(
      <CatalogPageContent />,
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
    expect(screen.getByText(expectedTitleText)).toBeInTheDocument();
  });
});
