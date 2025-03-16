import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import CommonButton from './common-button';
import { ButtonText } from '../../const';

describe('Component: CommonButton', () => {
  const buttonId = 'commonButton';
  const linkButtonId = 'commonButtonWithLink';
  const expectedText = ButtonText.Buy;
  const expectedLoadingText = ButtonText.Loading;

  it('should render correctly and return "button"', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
      />));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correctly and return "Link"', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isInCart
      />));

    expect(screen.getByTestId(linkButtonId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
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

  it('should render disabled "button"', () => {
    render(withRouter(
      <CommonButton
        buttonText={expectedText}
        isDisabled
      />));

    expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonId)).toBeDisabled();
    expect(screen.getByText(expectedLoadingText)).toBeInTheDocument();
  });
});
