import cn from 'classnames';
import { CartIconName } from '../../const';
import CartIcon from '../cart-icon/cart-icon';

type CommonButtonProps = {
  isInCart?: boolean;
  isAddToCart?: boolean;
  isProductCard?: boolean;
}

function CommonButton({isInCart = false, isAddToCart = false, isProductCard = true}: CommonButtonProps): JSX.Element {

  if (isInCart) {
    return (
      <a className="btn btn--purple-border product-card__btn product-card__btn--in-cart" href="#">
        <CartIcon icon={CartIconName.Added}/>
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
      {isAddToCart && <CartIcon icon={CartIconName.Add}/>}
      {isAddToCart ? 'Добавить в корзину' : 'Купить'}
    </button>
  );
}

export default CommonButton;
