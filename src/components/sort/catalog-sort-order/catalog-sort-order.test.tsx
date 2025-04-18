import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import CatalogSortOrder from './catalog-sort-order';

describe('Component: CatalogSortOrder', () => {
  it('should render correctly', () => {
    const containerId = 'catalogSortOrder';
    const {withStoreComponent} = withStore(
      <CatalogSortOrder />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
