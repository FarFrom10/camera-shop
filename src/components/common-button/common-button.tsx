import cn from 'classnames';
import { IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { Link } from 'react-router-dom';

type CommonButtonProps = {
  isInCart?: boolean;
  isAddToCart?: boolean;
  isProductCard?: boolean;
}

function CommonButton({isInCart = false, isAddToCart = false, isProductCard = true}: CommonButtonProps): JSX.Element {

  if (isInCart) {
    return (
      <Link className="btn btn--purple-border product-card__btn product-card__btn--in-cart" to="#">
        <CommonIcon icon={IconName.CartAdded}/>
        В корзине
      </Link>
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
