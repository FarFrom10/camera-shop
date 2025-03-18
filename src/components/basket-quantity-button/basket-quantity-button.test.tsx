import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import BasketQuantityButton from './basket-quantity-button';
import { ButtonQuantityDirection } from '../../const';

describe('Component: BasketQuantityButton', () => {
  const direction = ButtonQuantityDirection.Prev;

  it('should render correctly', () => {
    render(withRouter(
      <BasketQuantityButton direction={direction} onButtonClick={mockEmptyCallback}/>));

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
