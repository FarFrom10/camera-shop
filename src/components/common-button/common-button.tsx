import cn from 'classnames';
import { AppRoute, ButtonText, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type CommonButtonProps = {
  isDisabled?: boolean;
  isInCart?: boolean;
  isGoToCart?: boolean;
  isAddToCart?: boolean;
  isProductCard?: boolean;
  isModal?: boolean;
  isFitWidth?: boolean;
  buttonText: ButtonText;
  onButtonClick?: () => void ;
}

function CommonButtonTemplate({
  isDisabled = false,
  isInCart = false,
  isAddToCart = false,
  isProductCard = false,
  isModal = false,
  isFitWidth = false,
  isGoToCart = false,
  buttonText,
  onButtonClick
}: CommonButtonProps): JSX.Element {

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
      disabled={isDisabled}
      onClick={onButtonClick && onButtonClick}
      className={cn(
        'btn',
        'btn--purple',
        {'product-card__btn': isProductCard},
        {'modal__btn': isModal},
        {'modal__btn--fit-width': isFitWidth},
      )} type="button"
    >
      {isAddToCart && <CommonIcon icon={IconName.CartAdd}/>}
      {isDisabled ? ButtonText.Loading : buttonText}
    </button>
  );
}

const CommonButton = memo(CommonButtonTemplate);

export default CommonButton;
