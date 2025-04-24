import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import CatalogPagination from './catalog-pagination';
import { MAX_PAGES_PER_VIEW } from '../../const';

describe('Component: CatalogPagination', () => {
  const containerId = 'catalogPagination';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogPagination
        pagesNumber={5}
        currentPage={1}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should not display "prev" button if "currentPage" === 1', () => {
    const {withStoreComponent} = withStore(
      <CatalogPagination
        pagesNumber={5}
        currentPage={1}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.queryByText(/Назад/i)).not.toBeInTheDocument();
  });

  it('should display "prev" button if "currentPage" > 1', () => {
    const {withStoreComponent} = withStore(
      <CatalogPagination
        pagesNumber={5}
        currentPage={2}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
  });

  it('should not display "next" button if "pagesNumber" <= "MAX_PAGES_PER_VIEW"', () => {
    const {withStoreComponent} = withStore(
      <CatalogPagination
        pagesNumber={MAX_PAGES_PER_VIEW}
        currentPage={1}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.queryByText(/Далее/i)).not.toBeInTheDocument();
  });

  it('should display "next" button if "pagesNumber" > "MAX_PAGES_PER_VIEW"', () => {
    const {withStoreComponent} = withStore(
      <CatalogPagination
        pagesNumber={MAX_PAGES_PER_VIEW + 1}
        currentPage={1}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(/Далее/i)).toBeInTheDocument();
  });
});
