import { Link } from 'react-router-dom';
import { AppRoute, IconName, RouteName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type BreadcrubmsItemProps = {
  isActive?: boolean;
  route: AppRoute;
}

function BreadcrubmsItem({isActive = false, route}: BreadcrubmsItemProps): JSX.Element {
  if (isActive) {
    return (
      <li className="breadcrumbs__item">
        <span className='breadcrumbs__link breadcrumbs__link--active'>
          {RouteName[route]}
        </span>
      </li>
    );
  }

  return(
    <li className="breadcrumbs__item">
      <Link className='breadcrumbs__link' to={route}>
        {RouteName[route]}
        <CommonIcon icon={IconName.ArrowMini}/>
      </Link>
    </li>
  );
}

export default BreadcrubmsItem;
