import BigBanner from '../../big-banner/big-banner';
import CatalogPageContent from '../../catalog-page-content/catalog-page-content';
import Footer from '../../footer/footer';
import Header from '../../header/header';

function CatalogPage(): JSX.Element {
  return(
    <div className="wrapper">
      <Header/>
      <main>
        <BigBanner/>
        <CatalogPageContent/>
      </main>
      <Footer/>
    </div>

  );
}

export default CatalogPage;
