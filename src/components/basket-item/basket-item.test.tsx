import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BasketItem from './basket-item';

describe('Component: BasketItem', () => {
  const containerId = 'basketItem';

  it('should render correctly', () => {
    render(withRouter(
      <BasketItem />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
