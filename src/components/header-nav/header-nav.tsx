import { memo } from 'react';
import { AppRoute } from '../../const';
import HeaderNavLink from '../header-nav-link/header-nav-link';

function HeaderNavTemplate(): JSX.Element {
  return(
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <HeaderNavLink route={AppRoute.Index}/>
      </ul>
    </nav>
  );
}

const HeaderNav = memo(HeaderNavTemplate);

export default HeaderNav;
