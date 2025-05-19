import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import BasketList from './basket-list';
import { makeFakeStore } from '../../utils/mocks';
import { fakeBasketCameras } from '../../mocks/mock-test';
import { EmptyListMessage } from '../../const';

describe('Component: BasketList', () => {
  const containerId = 'basketList';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <BasketList
        cameras={fakeBasketCameras}
        isBasketLoading={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should display message if "cameras" array is empty', () => {
    const {withStoreComponent} = withStore(
      <BasketList
        cameras={[]}
        isBasketLoading={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(EmptyListMessage.Basket)).toBeInTheDocument();
  });
});
