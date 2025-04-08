import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import CatalogSortType from './catalog-sort-type';

describe('Component: CatalogSortType', () => {
  it('should render correctly', () => {
    const containerId = 'catalogSortType';
    const {withStoreComponent} = withStore(
      <CatalogSortType />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
