import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import BasketItemMini from './basket-item-mini';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: BasketItemMini', () => {
  const containerId = 'basketItemMini';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <BasketItemMini camera={fakeCurrentCamera}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
