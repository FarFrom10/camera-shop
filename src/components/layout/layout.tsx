import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

function Layout(): JSX.Element {
  return(
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
