import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { SortByType } from '../../const';
import * as mockComponent from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import CatalogSortTypeButton from './catalog-sort-type-button';

describe('Component: CatalogSortTypeButton', () => {
  const buttonId = 'catalogSortTypeButton';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogSortTypeButton
        sort={SortByType.Popular}
        currentSort={SortByType.Price}
        onSortTypeChange={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
  });

  it('button should be checked if "sort" and "currentSort" are the same', () => {
    const {withStoreComponent} = withStore(
      <CatalogSortTypeButton
        sort={SortByType.Popular}
        currentSort={SortByType.Popular}
        onSortTypeChange={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonId)).toBeChecked();
  });

  it('"onSortOrderChange" should be called when not active button clicked', async () => {
    const fakeOnSortTypeChangeSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');
    const {withStoreComponent} = withStore(
      <CatalogSortTypeButton
        sort={SortByType.Popular}
        currentSort={SortByType.Price}
        onSortTypeChange={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const buttonElement = screen.getByTestId(buttonId);
    await userEvent.click(buttonElement);


    expect(buttonElement).not.toBeChecked();
    expect(fakeOnSortTypeChangeSpy).toHaveBeenCalledTimes(1);
  });
});
