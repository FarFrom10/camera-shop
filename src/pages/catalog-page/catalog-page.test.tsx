import { render, screen } from '@testing-library/react';
import CatalogPage from './catalog-page';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: CatalogPage', () => {
  const containerId = 'catalogPage';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogPage />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should not render "BigBanner" component if "promoCameras" length is 0', () => {
    const {withStoreComponent} = withStore(
      <CatalogPage />,
      makeFakeStore({
        cameras: {
          promoCameras: [],
        }
      })
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId).children.length).toBe(2);
  });
});
