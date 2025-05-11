import { useAppSelector } from '../../hooks';
import { useModalAddToBasket } from '../../hooks/use-modal-add-to-basket';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';
import CatalogCards from '../catalog-cards/catalog-cards';
import CatalogFilter from '../filter/catalog-filter/catalog-filter';
import CatalogPageSort from '../sort/catalog-page-sort/catalog-page-sort';
import ModalAddToBasket from '../modal/modal-add-to-basket/modal-add-to-basket';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import CatalogPagination from '../catalog-pagination/catalog-pagination';
import { CAMERAS_PER_PAGE } from '../../const';
import { useFilterCatalog } from '../../hooks/use-filter-catalog';
import { usePaginationCatalog } from '../../hooks/use-pagination-catalog';
import { selectFilterState } from '../../store/filter-process/filter-process.selectors';
import { useCatalogSearchParams } from '../../hooks/use-catalog-search-params';

function CatalogPageContent(): JSX.Element {
  const cameras = useAppSelector(selectCameras);
  const wholeFilterState = useAppSelector(selectFilterState);

  const [
    modalAddToBasket,
    handleModalAddToBasketOpen,
    handleModalAddToBasketClose,
    currentModalCamera
  ] = useModalAddToBasket({cameras});

  const [filteredCamerasByPrice] = useFilterCatalog({cameras});

  useCatalogSearchParams({wholeFilterState});

  const [
    currentCameras,
    currentPage,
    totalPages
  ] = usePaginationCatalog({filteredCamerasByPrice});

  return (
    <section data-testid='catalogPageContent' className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogFilter
            cameras={cameras}
            currentMinPrice={wholeFilterState.price.min}
            currentMaxPrice={wholeFilterState.price.max}
          />
          <div className="catalog__content">
            <CatalogPageSort/>
            <CatalogCards
              cameras={currentCameras}
              onModalAddToBasketOpen={handleModalAddToBasketOpen}
            />
            {filteredCamerasByPrice.length > CAMERAS_PER_PAGE
            &&
            <CatalogPagination
              currentPage={currentPage}
              pagesNumber={totalPages}
            />}
          </div>
        </div>
        <ModalWrapper onModalClose={handleModalAddToBasketClose} isActive={modalAddToBasket.isOpen}>
          <ModalAddToBasket onModalClose={handleModalAddToBasketClose} camera={currentModalCamera}/>
        </ModalWrapper>
      </div>
    </section>
  );
}

export default CatalogPageContent;
