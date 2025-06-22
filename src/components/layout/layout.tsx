import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { AppRoute, MODAL_ROOT_ID } from '../../const';


function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isIndexPage = pathname === AppRoute.Index;

  return(
    <div data-testid='layout' className="wrapper">
      <div id={MODAL_ROOT_ID}></div>
      <Header isIndexPage={isIndexPage} />
      <Outlet/>
      <Footer isIndexPage={isIndexPage}/>
    </div>
  );
}

export default Layout;
