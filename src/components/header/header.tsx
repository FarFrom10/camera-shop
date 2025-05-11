import { memo } from 'react';
import FormSearch from '../form-search/form-search';
import HeaderBasket from '../header-basket/header-basket';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

type HeaderProps = {
  isIndexPage?: boolean;
}

function HeaderTemplate({ isIndexPage = false }: HeaderProps): JSX.Element {
  return (
    <header data-testid='header' className="header" id="header">
      <div className="container">
        <Logo isIndexPage={isIndexPage}/>
        <HeaderNav/>
        <FormSearch/>
        <HeaderBasket/>
      </div>
    </header>
  );
}

const Header = memo(HeaderTemplate);

export default Header;
