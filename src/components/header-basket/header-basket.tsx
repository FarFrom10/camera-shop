import { Link } from 'react-router-dom';
import { AppRoute, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

function HeaderBasket(): JSX.Element {
  return (
    <Link data-testid='headerBasket' className="header__basket-link" to={AppRoute.Basket}>
      <CommonIcon icon={IconName.CartAdded}/>
    </Link>
  );
}

export default HeaderBasket;
