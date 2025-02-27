import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import BigBanner from '../big-banner/big-banner';
import { AppRoute } from '../../const';
import ButtonUp from '../button-up/button-up';

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isCatalogPage = pathname === AppRoute.Index;
  const isProductPage = pathname === AppRoute.Product;

  return(
    <div className="wrapper">
      <Header/>
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
