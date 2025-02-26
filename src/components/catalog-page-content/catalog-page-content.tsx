import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CatalogSection from '../catalog-section/catalog-section';

function CatalogPageContent(): JSX.Element {
  return (
    <div className="page-content">
      <Breadcrumbs/>
      <CatalogSection/>
    </div>
  );
}

export default CatalogPageContent;
