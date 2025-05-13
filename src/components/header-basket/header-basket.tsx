import { Link } from 'react-router-dom';
import { AppRoute, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { useAppSelector } from '../../hooks';
import { selectAddedCameras } from '../../store/basket-process/basket-process.selectors';

function HeaderBasket(): JSX.Element {
  const addedCameras = useAppSelector(selectAddedCameras);
  const totalAmount = addedCameras.reduce((sum, item) => sum + item.amount, 0);
  const displayAmount = totalAmount > 99 ? 99 : totalAmount;

  return (
    <Link data-testid='headerBasket' className="header__basket-link" to={AppRoute.Basket}>
      <CommonIcon icon={IconName.CartAdded}/>
      {!!totalAmount && <span className="header__basket-count">{displayAmount}</span>}
    </Link>
  );
}

export default HeaderBasket;
