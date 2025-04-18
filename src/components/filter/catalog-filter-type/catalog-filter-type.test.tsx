import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import CatalogFilterType from './catalog-filter-type';

describe('Component: CatalogFilterType', () => {
  it('should render correctly', () => {
    const containerId = 'catalogFilterType';
    const {withStoreComponent} = withStore(
      <CatalogFilterType/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Тип камеры/i)).toBeInTheDocument();
  });
});
