import { render, screen, within } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import BasketSummary from './basket-summary';
import { makeFakeStore } from '../../utils/mocks';
import { fakeBasketCameras } from '../../mocks/mock-test';

describe('Component: BasketSummary', () => {
  const mainContainerId = 'basketSummary';
  const orderContainerId = 'basketSummaryOrder';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <BasketSummary
        cameras={fakeBasketCameras}
        isBasketLoading={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const mainContainer = screen.getByTestId(mainContainerId);
    const orderContainer = screen.getByTestId(orderContainerId);

    expect(mainContainer).toBeInTheDocument();
    expect(screen.getByText(/Всего/i)).toBeInTheDocument();
    expect(screen.getByText(/Скидка/i)).toBeInTheDocument();
    expect(screen.getByText(/К оплате/i)).toBeInTheDocument();
    expect(within(orderContainer).getByRole('button')).toBeInTheDocument();
  });

  it('submit button should be disabled if "cameras" array is empty', () => {
    const {withStoreComponent} = withStore(
      <BasketSummary
        cameras={[]}
        isBasketLoading={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const orderContainer = screen.getByTestId(orderContainerId);

    expect(within(orderContainer).getByRole('button')).toBeDisabled();
  });

  it('submit button should be disabled if "isBasketLoading" is "true"', () => {
    const {withStoreComponent} = withStore(
      <BasketSummary
        cameras={fakeBasketCameras}
        isBasketLoading
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const orderContainer = screen.getByTestId(orderContainerId);

    expect(within(orderContainer).getByRole('button')).toBeDisabled();
  });
});
