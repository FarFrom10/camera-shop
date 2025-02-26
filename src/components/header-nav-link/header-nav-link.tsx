import { RouteName } from '../../const';
import { HeaderLinkRoute } from '../types/types';

type HeaderNavLinkProps = {
  route: HeaderLinkRoute;
}

function HeaderNavLink({route}: HeaderNavLinkProps): JSX.Element {
  return (
    <li className="main-nav__item">
      <a className="main-nav__link" href="catalog.html">
        {RouteName[route]}
      </a>
    </li>
  );
}

export default HeaderNavLink;
