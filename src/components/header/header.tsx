import FormSearch from '../form-search/form-search';
import HeaderBasket from '../header-basket/header-basket';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

type HeaderProps = {
  isBasketPage: boolean;
}

function Header({isBasketPage}: HeaderProps): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo/>
        <HeaderNav/>
        {isBasketPage && <FormSearch/>}
        {isBasketPage && <HeaderBasket/>}
      </div>
    </header>
  );
}

export default Header;
