import { render, screen } from '@testing-library/react';
import CatalogFilterCategory from './catalog-filter-category';
import { withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';

describe('Component: CatalogFilterCategory', () => {
  it('should render correctly', () => {
    const containerId = 'catalogFilterCategory';
    const {withStoreComponent} = withStore(
      <CatalogFilterCategory/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Фотокамера/i)).toBeInTheDocument();
    expect(screen.getByText(/Видеокамера/i)).toBeInTheDocument();
  });
});
