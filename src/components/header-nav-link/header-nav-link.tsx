import { Link } from 'react-router-dom';
import { AppRoute, RouteName } from '../../const';

type HeaderNavLinkProps = {
  route: AppRoute;
}

function HeaderNavLink({route}: HeaderNavLinkProps): JSX.Element {
  return (
    <li data-testid='headerNavItem' className="main-nav__item">
      <Link className="main-nav__link" to={route}>
        {RouteName[route]}
      </Link>
    </li>
  );
}

export default HeaderNavLink;
