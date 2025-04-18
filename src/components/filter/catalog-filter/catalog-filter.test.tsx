import { render, screen } from '@testing-library/react';
import CatalogFilter from './catalog-filter';
import { fakeCameras } from '../../../mocks/mock-test';
import { withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';


describe('Component: CatalogFilter', () => {
  it('should render correctly', () => {
    const containerId = 'catalogFilter';

    const {withStoreComponent} = withStore(
      <CatalogFilter cameras={fakeCameras}/>,
      makeFakeStore()
    );
    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Сбросить фильтры/i)).toBeInTheDocument();
  });
});
