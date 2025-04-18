import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import CatalogSortOrderButton from './catalog-sort-order-button';
import { SortByOrder } from '../../../const';
import * as mockComponent from '../../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: CatalogSortOrderButton', () => {
  const buttonId = 'catalogSortOrderButton';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogSortOrderButton
        sort={SortByOrder.Up}
        currentSort={SortByOrder.Down}
        onSortOrderChange={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
  });

  it('button should be checked if "sort" and "currentSort" are the same', () => {
    const {withStoreComponent} = withStore(
      <CatalogSortOrderButton
        sort={SortByOrder.Up}
        currentSort={SortByOrder.Up}
        onSortOrderChange={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonId)).toBeChecked();
  });

  it('"onSortOrderChange" should be called when not active button clicked', async () => {
    const fakeOnSortOrderChangeSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');
    const {withStoreComponent} = withStore(
      <CatalogSortOrderButton
        sort={SortByOrder.Up}
        currentSort={SortByOrder.Down}
        onSortOrderChange={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const buttonElement = screen.getByTestId(buttonId);
    await userEvent.click(buttonElement);


    expect(buttonElement).not.toBeChecked();
    expect(fakeOnSortOrderChangeSpy).toHaveBeenCalledTimes(1);
  });
});
