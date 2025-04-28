import { useAppDispatch, useAppSelector } from '../../hooks';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';
import CatalogCards from '../catalog-cards/catalog-cards';
import CatalogFilter from '../filter/catalog-filter/catalog-filter';
import CatalogPageSort from '../sort/catalog-page-sort/catalog-page-sort';
import ModalContactMe from '../modal/modal-contact-me/modal-contact-me';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import CatalogPagination from '../catalog-pagination/catalog-pagination';
import { CAMERAS_PER_PAGE, SearchParamsName } from '../../const';
import { useFilterCatalog } from '../../hooks/use-filter-catalog';
import { usePaginationCatalog } from '../../hooks/use-pagination-catalog';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { changeCatalogCurrentPage, changeCategory } from '../../store/filter-process/filter-process.slice';
import { isValueFilterCategory } from '../../utils/type';
import { selectFilterState } from '../../store/filter-process/filter-process.selectors';

function CatalogPageContent(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const cameras = useAppSelector(selectCameras);
  const wholeFilterState = useAppSelector(selectFilterState);

  useEffect(() => {
    const searchPageNumber = Number(searchParams.get(SearchParamsName.Page));
    const searchCategory = searchParams.get(SearchParamsName.Category);

    if (searchPageNumber > 1) {
      dispatch(changeCatalogCurrentPage(searchPageNumber));
    }
    if (searchCategory && isValueFilterCategory(searchCategory)) {
      dispatch(changeCategory(searchCategory));
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (wholeFilterState.category) {
      newSearchParams.set(SearchParamsName.Category, wholeFilterState.category);
    }
    if (wholeFilterState.catalogCurrentPage) {
      newSearchParams.set(SearchParamsName.Page, String(wholeFilterState.catalogCurrentPage));
    }

    setSearchParams(newSearchParams);
  }, [wholeFilterState, searchParams, setSearchParams]);

  const [
    modalContactMe,
    handleModalContactMeOpen,
    handleModalContactMeClose,
    currentModalCamera
  ] = useModalContactMe({cameras});

  const [filteredCamerasByPrice] = useFilterCatalog({cameras});

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
          <CatalogFilter cameras={cameras} />
          <div className="catalog__content">
            <CatalogPageSort/>
            <CatalogCards
              cameras={currentCameras}
              onModalContactMeOpen={handleModalContactMeOpen}
            />
            {filteredCamerasByPrice.length > CAMERAS_PER_PAGE
            &&
            <CatalogPagination
              currentPage={currentPage}
              pagesNumber={totalPages}
            />}
          </div>
        </div>
        <ModalWrapper onModalClose={handleModalContactMeClose} isActive={modalContactMe.isOpen}>
          <ModalContactMe onModalClose={handleModalContactMeClose} camera={currentModalCamera}/>
        </ModalWrapper>
      </div>
    </section>
  );
}

export default CatalogPageContent;
