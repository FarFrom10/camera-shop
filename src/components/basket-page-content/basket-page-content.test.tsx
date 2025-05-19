import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import BasketPageContent from './basket-page-content';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: BasketPageContent', () => {
  const containerId = 'basketPageContent';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <BasketPageContent isBasketLoading={false}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Корзина/i)).toBeInTheDocument();
  });
});
