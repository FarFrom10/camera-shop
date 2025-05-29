import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { AppRoute } from '../../const';


function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isIndexPage = pathname === AppRoute.Index;

  return(
    <div data-testid='layout' className="wrapper">
      <div id="modal-root"></div>
      <Header isIndexPage={isIndexPage} />
      <Outlet/>
      <Footer isIndexPage={isIndexPage}/>
    </div>
  );
}

export default Layout;
