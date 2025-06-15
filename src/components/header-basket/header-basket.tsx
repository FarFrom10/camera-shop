import { Link } from 'react-router-dom';
import { AppRoute, IconName, MAX_DISPLAY_CART_AMOUNT } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { useAppSelector } from '../../hooks';
import { selectBasketItems } from '../../store/basket-process/basket-process.selectors';
import { getTotalBasketItemsAmount } from '../../utils/common';

function HeaderBasket(): JSX.Element {
  const basketItems = useAppSelector(selectBasketItems);
  const totalAmount = getTotalBasketItemsAmount(basketItems);
  const displayAmount = totalAmount > MAX_DISPLAY_CART_AMOUNT ? MAX_DISPLAY_CART_AMOUNT : totalAmount;

  return (
    <Link data-testid='headerBasket' className="header__basket-link" to={AppRoute.Basket}>
      <CommonIcon icon={IconName.CartAdded}/>
      {!!totalAmount && <span className="header__basket-count">{displayAmount}</span>}
    </Link>
  );
}

export default HeaderBasket;
