import cn from 'classnames';
import { ButtonText, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { Link } from 'react-router-dom';

type CommonButtonProps = {
  isDisabled?: boolean;
  isInCart?: boolean;
  isAddToCart?: boolean;
  isProductCard?: boolean;
  isModal?: boolean;
  isFitWidth?: boolean;
  buttonText: ButtonText;
  onButtonClick?: () => void ;
}

function CommonButton({
  isDisabled = false,
  isInCart = false,
  isAddToCart = false,
  isProductCard = false,
  isModal = false,
  isFitWidth = false,
  buttonText,
  onButtonClick
}: CommonButtonProps): JSX.Element {

  if (isInCart) {
    return (
      <Link className="btn btn--purple-border product-card__btn product-card__btn--in-cart" to="#">
        <CommonIcon icon={IconName.CartAdded}/>
        {buttonText}
      </Link>
    );
  }

  return (
    <button
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

export default CommonButton;
