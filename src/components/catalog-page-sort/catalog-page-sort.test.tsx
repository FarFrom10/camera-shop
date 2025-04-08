import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import CatalogPageSort from './catalog-page-sort';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: CatalogPageSort', () => {
  it('should render correctly', () => {
    const containerId = 'catalogPageSort';
    const {withStoreComponent} = withStore(
      <CatalogPageSort />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Сортировать/i)).toBeInTheDocument();
  });
});
