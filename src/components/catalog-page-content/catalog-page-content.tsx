import { useAppSelector } from '../../hooks';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';
import CatalogAside from '../catalog-aside/catalog-aside';
import CatalogCards from '../catalog-cards/catalog-cards';

function CatalogPageContent(): JSX.Element {
  const cameras = useAppSelector(selectCameras);

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogAside/>
          <div className="catalog__content">
            <CatalogCards cameras={cameras}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogPageContent;
