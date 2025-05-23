import cn from 'classnames';
import { AppRoute, ButtonText, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { Link } from 'react-router-dom';
import { memo, useMemo } from 'react';

type CommonButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  isInCart?: boolean;
  isGoToCart?: boolean;
  isAddToCart?: boolean;
  isProductCard?: boolean;
  isModal?: boolean;
  isFitWidth?: boolean;
  isHalfWidth?: boolean;
  isSubmit?: boolean;
  isWhite?: boolean;
  isFormReview?: boolean;
  buttonText: ButtonText;
  onButtonClick?: () => void ;
}

function CommonButtonTemplate({
  isDisabled = false,
  isLoading = false,
  isInCart = false,
  isAddToCart = false,
  isProductCard = false,
  isModal = false,
  isFitWidth = false,
  isHalfWidth = false,
  isGoToCart = false,
  isSubmit = false,
  isFormReview = false,
  isWhite = false,
  buttonText,
  onButtonClick
}: CommonButtonProps): JSX.Element {
  const buttonType = useMemo(() => isSubmit ? 'submit' : 'button', [isSubmit]);

  if (isGoToCart) {
    return (
      <Link data-testid='commonButtonWithLink' className={cn(
        'btn',
        {'btn--purple-border': isInCart},
        {'product-card__btn': isInCart},
        {'product-card__btn--in-cart': isInCart},
        {'btn--purple': isModal},
        {'modal__btn': isModal},
        {'modal__btn--fit-width': isFitWidth},
        {'modal__btn--half-width': isHalfWidth},
      )} to={AppRoute.Basket}
      >
        {isInCart && <CommonIcon icon={IconName.CartAdded}/>}
        {buttonText}
      </Link>
    );
  }

  return (
    <button
      data-testid='commonButton'
      disabled={isDisabled || isLoading}
      onClick={onButtonClick && onButtonClick}
      className={cn(
        'btn',
        {'btn--purple': !isWhite},
        {'product-card__btn': isProductCard},
        {'modal__btn': isModal},
        {'modal__btn--fit-width': isFitWidth},
        {'modal__btn--half-width': isHalfWidth},
        {'form-review__btn': isFormReview},
      )} type={buttonType}
    >
      {isAddToCart && <CommonIcon icon={IconName.CartAdd}/>}
      {isLoading ? ButtonText.Loading : buttonText}
    </button>
  );
}

const CommonButton = memo(CommonButtonTemplate);

export default CommonButton;
