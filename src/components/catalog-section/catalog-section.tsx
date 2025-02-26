import CatalogAside from '../catalog-aside/catalog-aside';
import CatalogCards from '../catalog-cards/catalog-cards';

function CatalogSection(): JSX.Element {
  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogAside/>
          <div className="catalog__content">
            <CatalogCards/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogSection;
