import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BasketItemDescription from './basket-item-description';

describe('Component: BasketItemDescription', () => {
  const containerId = 'basketItemDescription';

  it('should render correctly', () => {
    render(withRouter(
      <BasketItemDescription />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
