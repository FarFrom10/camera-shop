import { AppRoute, RouteName } from '../../const';

type HeaderNavLinkProps = {
  route: AppRoute;
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
