import { generatePath, Outlet, useLocation, useParams } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import BigBanner from '../big-banner/big-banner';
import { AppRoute } from '../../const';
import ButtonUp from '../button-up/button-up';

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const {id} = useParams();

  const isCatalogPage = pathname === AppRoute.Index;
  const isProductPage = id ? pathname === generatePath(AppRoute.Product, {id}) : false;
  const isBasketPage = pathname === AppRoute.Basket;

  return(
    <div className="wrapper">
      <Header isBasketPage={isBasketPage}/>
      <main>
        <div className="page-content">
          {isCatalogPage && <BigBanner/>}
          <Breadcrumbs/>
          <Outlet/>
        </div>
      </main>
      {isProductPage && <ButtonUp/>}
      <Footer/>
    </div>
  );
}

export default Layout;
