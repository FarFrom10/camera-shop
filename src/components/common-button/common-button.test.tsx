import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import CommonButton from './common-button';
import { ButtonText } from '../../const';
import * as mockComponent from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: CommonButton', () => {
  const buttonId = 'commonButton';
  const linkButtonId = 'commonButtonWithLink';
  const expectedText = ButtonText.Buy;

  it('should render correctly and return "button"', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
      />));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correctly and return "Link" with "isGoToCart" prop', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isGoToCart
      />));

    expect(screen.getByTestId(linkButtonId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('link element should have "btn--purple-border", "product-card__btn" and "product-card__btn--in-cart" classes with "isGoToCart" and "isInCart" props', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isGoToCart
        isInCart
      />));
    const linkElement = screen.getByTestId(linkButtonId);

    expect(linkElement).toHaveClass('btn--purple-border');
    expect(linkElement).toHaveClass('product-card__btn');
    expect(linkElement).toHaveClass('product-card__btn--in-cart');
  });

  it('should render "button" with all classes', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isProductCard
        isModal
        isFitWidth
      />));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonId)).toHaveClass('product-card__btn');
    expect(screen.getByTestId(buttonId)).toHaveClass('modal__btn');
    expect(screen.getByTestId(buttonId)).toHaveClass('modal__btn--fit-width');
  });

  it('should render disabled "button" with "isDisabled" prop', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isDisabled
      />));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonId)).toBeDisabled();
  });

  it('element should have "loading" text with "isLoading" prop', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isLoading
      />));

    expect(screen.getByText(ButtonText.Loading)).toBeInTheDocument();
  });

  it('button element should fire callback after click on it', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        onButtonClick={mockComponent.mockEmptyCallback}
      />));
    const buttonElement = screen.getByTestId(buttonId);

    await userEvent.click(buttonElement);
    expect(fakeCallbackSpy).toBeCalledTimes(1);
  });

  it('button element should have icon as child element with "isAddToCart" prop', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isAddToCart
      />));

    expect(screen.getByTestId(buttonId).children).toHaveLength(1);
  });
});
