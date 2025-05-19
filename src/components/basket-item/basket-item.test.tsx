import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import BasketItem from './basket-item';
import { fakeBasketCamera } from '../../mocks/mock-test';

describe('Component: BasketItem', () => {
  const containerId = 'basketItem';
  const removeButtonId = 'basketItemRemoveButton';

  it('should render correctly', () => {
    render(withRouter(
      <BasketItem
        camera={fakeBasketCamera}
        onAmountChange={mockEmptyCallback}
        onModalOpen={mockEmptyCallback}
        isBasketLoading={false}
      />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(removeButtonId)).toBeInTheDocument();
  });

  it('remove button should be disabled if "isBasketLoading" is "true"', () => {
    render(withRouter(
      <BasketItem
        camera={fakeBasketCamera}
        onAmountChange={mockEmptyCallback}
        onModalOpen={mockEmptyCallback}
        isBasketLoading
      />));

    expect(screen.getByTestId(removeButtonId)).toBeDisabled();
  });
});
