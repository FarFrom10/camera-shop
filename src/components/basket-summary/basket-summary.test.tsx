import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BasketSummary from './basket-summary';

describe('Component: BasketSummary', () => {
  const containerId = 'basketSummary';

  it('should render correctly', () => {
    render(withRouter(
      <BasketSummary />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
