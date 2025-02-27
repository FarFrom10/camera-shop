import { AppRoute } from '../../../const';
import CatalogPageContent from '../../catalog-page-content/catalog-page-content';
import Title from '../../title/title';

function CatalogPage(): JSX.Element {
  return(
    <>
      <Title pageName={AppRoute.Index}/>
      <CatalogPageContent/>
    </>
  );
}

export default CatalogPage;
