import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import CatalogPaginationItem from './catalog-pagination-item';
import * as mockComponent from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: CatalogPaginationItem', () => {
  const containerId = 'catalogPaginationItem';
  const buttonId = 'catalogPaginationButton';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogPaginationItem
        pageNumber={1}
        currentPage={2}
        onButtonClick={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('button should have active class if "pageNumber" and "currentPage" are equal', () => {
    const {withStoreComponent} = withStore(
      <CatalogPaginationItem
        pageNumber={1}
        currentPage={1}
        onButtonClick={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonId)).toHaveClass('pagination__link--active');
  });

  it('button should fire "mockEmptyCallback" after click on it', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');
    const {withStoreComponent} = withStore(
      <CatalogPaginationItem
        pageNumber={1}
        currentPage={1}
        onButtonClick={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    await userEvent.click(screen.getByTestId(buttonId));

    expect(fakeCallbackSpy).toHaveBeenCalledTimes(1);
  });

  it('should display text with "linkText" prop', () => {
    const expectedText = 'Далее';
    const {withStoreComponent} = withStore(
      <CatalogPaginationItem
        linkText={expectedText}
        currentPage={1}
        onButtonClick={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonId)).toHaveTextContent(expectedText);
  });
});
