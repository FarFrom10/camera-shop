import { AppRoute } from '../../../const';
import BigBanner from '../../big-banner/big-banner';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import CatalogPageContent from '../../catalog-page-content/catalog-page-content';
import Title from '../../title/title';

function CatalogPage(): JSX.Element {

  return(
    <main>
      <Title pageName={AppRoute.Index}/>
      <div className="page-content">
        <BigBanner/>
        <Breadcrumbs/>
        <CatalogPageContent/>
      </div>
    </main>
  );
}

export default CatalogPage;
