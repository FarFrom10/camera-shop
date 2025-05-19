import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import BasketQuantityButton from './basket-quantity-button';
import { ButtonQuantityDirection } from '../../const';
import * as mockComponent from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: BasketQuantityButton', () => {
  const direction = ButtonQuantityDirection.Prev;

  it('should render correctly', () => {
    const expectedClass = `btn-icon--${direction}`;

    render(withRouter(
      <BasketQuantityButton direction={direction} onButtonClick={mockEmptyCallback}/>));

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass(expectedClass);
  });

  it('button should fire callback after click on it', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(
      <BasketQuantityButton direction={direction} onButtonClick={mockEmptyCallback}/>));
    await userEvent.click(screen.getByRole('button'));

    expect(fakeCallbackSpy).toHaveBeenCalledTimes(1);
  });
});
