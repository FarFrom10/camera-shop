import BigBanner from '../../components/big-banner/big-banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogPageContent from '../../components/catalog-page-content/catalog-page-content';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectPromoCameras } from '../../store/cameras-process/cameras-process.selectors';

function CatalogPage(): JSX.Element {
  const promoCameras = useAppSelector(selectPromoCameras);

  return(
    <main>
      <Title pageName={AppRoute.Index}/>
      <div data-testid='catalogPage' className="page-content">
        {promoCameras.length !== 0 && <BigBanner promoCameras={promoCameras}/>}
        <Breadcrumbs/>
        <CatalogPageContent/>
      </div>
    </main>
  );
}

export default CatalogPage;
