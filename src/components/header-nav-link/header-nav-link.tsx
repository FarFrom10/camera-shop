import { Link } from 'react-router-dom';
import { AppRoute, RouteName } from '../../const';
import { memo } from 'react';

type HeaderNavLinkProps = {
  route: AppRoute;
}

function HeaderNavLinkTemplate({route}: HeaderNavLinkProps): JSX.Element {
  return (
    <li data-testid='headerNavItem' className="main-nav__item">
      <Link className="main-nav__link" to={route}>
        {RouteName[route]}
      </Link>
    </li>
  );
}

const HeaderNavLink = memo(HeaderNavLinkTemplate);

export default HeaderNavLink;
