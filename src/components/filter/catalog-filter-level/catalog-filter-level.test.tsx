import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import CatalogFilterLevel from './catalog-filter-level';

describe('Component: CatalogFilterLevel', () => {
  it('should render correctly', () => {
    const containerId = 'catalogFilterLevel';
    const {withStoreComponent} = withStore(
      <CatalogFilterLevel/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Уровень/i)).toBeInTheDocument();
  });
});
