import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BasketPageContent from './basket-page-content';

describe('Component: BasketPageContent', () => {
  const containerId = 'basketPageContent';

  it('should render correctly', () => {
    render(withRouter(
      <BasketPageContent />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
