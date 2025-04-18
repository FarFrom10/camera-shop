import { render, screen } from '@testing-library/react';
import CatalogFilterItem from './catalog-filter-item';
import { makeFakeStore } from '../../utils/mocks';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import { FilterItemType, TranslatedFilterItemType } from '../../const';
import * as mockComponent from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: CatalogFilterItem', () => {
  const inputId = 'catalogFilterItemInput';
  const type = FilterItemType.Digital;
  const name = TranslatedFilterItemType[type];

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogFilterItem
        onInputChange={mockEmptyCallback}
        dataType={type}
        name={name}
        isVideo={false}
        isChecked={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(inputId)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('input element should fire "mockEmptyCallback" after click on it', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');
    const {withStoreComponent} = withStore(
      <CatalogFilterItem
        onInputChange={mockEmptyCallback}
        dataType={type}
        name={name}
        isVideo={false}
        isChecked={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    await userEvent.click(screen.getByTestId(inputId));

    expect(fakeCallbackSpy).toHaveBeenCalledTimes(1);
  });

  it('input element should be checked with prop "isChecked"', () => {
    const {withStoreComponent} = withStore(
      <CatalogFilterItem
        onInputChange={mockEmptyCallback}
        dataType={type}
        name={name}
        isVideo={false}
        isChecked
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(inputId)).toBeChecked();
  });
});
