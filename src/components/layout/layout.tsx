import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { AppRoute } from '../../const';


function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isBasketPage = pathname === AppRoute.Basket;

  return(
    <div className="wrapper">
      <Header isBasketPage={isBasketPage}/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;
