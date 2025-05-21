import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import BasketPage from './basket-page';

describe('Component: BasketPage', () => {
  it('should render correctly', () => {
    const containerId = 'basketPage';
    const {withStoreComponent} = withStore(
      <BasketPage />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
