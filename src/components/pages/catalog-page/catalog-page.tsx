import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectPromoCameras } from '../../../store/cameras-process/cameras-process.selectors';
import BigBanner from '../../big-banner/big-banner';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import CatalogPageContent from '../../catalog-page-content/catalog-page-content';
import Title from '../../title/title';

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
