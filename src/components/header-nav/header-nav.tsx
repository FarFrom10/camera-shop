import { AppRoute } from '../../const';
import HeaderNavLink from '../header-nav-link/header-nav-link';

function HeaderNav(): JSX.Element {
  return(
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <HeaderNavLink route={AppRoute.Index}/>
      </ul>
    </nav>
  );
}

export default HeaderNav;
