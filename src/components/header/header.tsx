import { memo } from 'react';
import FormSearch from '../form-search/form-search';
import HeaderBasket from '../header-basket/header-basket';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

type HeaderProps = {
  isBasketPage?: boolean;
  isIndexPage?: boolean;
}

function HeaderTemplate({isBasketPage = false, isIndexPage = false}: HeaderProps): JSX.Element {
  return (
    <header data-testid='header' className="header" id="header">
      <div className="container">
        <Logo isIndexPage={isIndexPage}/>
        <HeaderNav/>
        {isBasketPage && <FormSearch/>}
        {isBasketPage && <HeaderBasket/>}
      </div>
    </header>
  );
}

const Header = memo(HeaderTemplate);

export default Header;
