import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BasketList from './basket-list';

describe('Component: BasketList', () => {
  const containerId = 'basketList';

  it('should render correctly', () => {
    render(withRouter(
      <BasketList />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
