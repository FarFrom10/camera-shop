import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { AppRoute } from '../../const';


function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isBasketPage = pathname === AppRoute.Basket;
  const isIndexPage = pathname === AppRoute.Index;

  return(
    <div className="wrapper">
      <Header isIndexPage={isIndexPage} isBasketPage={isBasketPage}/>
      <Outlet/>
      <Footer isIndexPage={isIndexPage}/>
    </div>
  );
}

export default Layout;
