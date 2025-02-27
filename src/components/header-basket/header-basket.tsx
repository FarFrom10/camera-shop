import { IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

function HeaderBasket(): JSX.Element {
  return (
    <a className="header__basket-link" href="#">
      <CommonIcon icon={IconName.CartAdded}/>
    </a>
  );
}

export default HeaderBasket;
