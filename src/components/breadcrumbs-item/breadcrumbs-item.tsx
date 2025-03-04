import { Link } from 'react-router-dom';
import { AppRoute, IconName, RouteName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type BreadcrubmsItemProps = {
  isActive?: boolean;
  route?: AppRoute;
  productRoute?: string;
  productName?: string;
}

function BreadcrubmsItem({isActive = false, route, productRoute = '', productName = ''}: BreadcrubmsItemProps): JSX.Element {
  if (isActive) {
    return (
      <li className="breadcrumbs__item">
        <span className='breadcrumbs__link breadcrumbs__link--active'>
          {route ? RouteName[route] : productName}
        </span>
      </li>
    );
  }

  return(
    <li className="breadcrumbs__item">
      <Link className='breadcrumbs__link' to={route ? route : productRoute}>
        {route ? RouteName[route] : productName}
        <CommonIcon icon={IconName.ArrowMini}/>
      </Link>
    </li>
  );
}

export default BreadcrubmsItem;
