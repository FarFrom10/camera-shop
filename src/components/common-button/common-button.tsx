import cn from 'classnames';
import { IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type CommonButtonProps = {
  isInCart?: boolean;
  isAddToCart?: boolean;
  isProductCard?: boolean;
}

function CommonButton({isInCart = false, isAddToCart = false, isProductCard = true}: CommonButtonProps): JSX.Element {

  if (isInCart) {
    return (
      <a className="btn btn--purple-border product-card__btn product-card__btn--in-cart" href="#">
        <CommonIcon icon={IconName.CartAdded}/>
        В корзине
      </a>
    );
  }

  return (
    <button className={cn(
      'btn',
      'btn--purple',
      {'product-card__btn': isProductCard},
    )} type="button"
    >
      {isAddToCart && <CommonIcon icon={IconName.CartAdd}/>}
      {isAddToCart ? 'Добавить в корзину' : 'Купить'}
    </button>
  );
}

export default CommonButton;
