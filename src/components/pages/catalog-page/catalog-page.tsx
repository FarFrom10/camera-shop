import { AppRoute } from '../../../const';
import BigBanner from '../../big-banner/big-banner';
import CatalogPageContent from '../../catalog-page-content/catalog-page-content';
import Title from '../../title/title';

function CatalogPage(): JSX.Element {
  return(
    <>
      <Title pageName={AppRoute.Index}/>
      <BigBanner/>
      <CatalogPageContent/>
    </>
  );
}

export default CatalogPage;
