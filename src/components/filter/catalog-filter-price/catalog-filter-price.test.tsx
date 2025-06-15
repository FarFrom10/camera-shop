import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../../utils/mock-component';
import CatalogFilterPrice from './catalog-filter-price';
import { fakeCameras } from '../../../mocks/mock-test';
import { makeFakeStore } from '../../../utils/mocks';

describe('Component: CatalogFilterPrice', () => {
  it('should render correctly', () => {
    const containerId = 'catalogFilterPrice';
    const {withStoreComponent} = withStore(
      <CatalogFilterPrice
        currentMinPrice=''
        currentMaxPrice=''
        cameras={fakeCameras}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Цена/i)).toBeInTheDocument();
  });
});
