import { useAppDispatch, useAppSelector } from '../../hooks';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';
import CatalogCards from '../catalog-cards/catalog-cards';
import CatalogFilter from '../filter/catalog-filter/catalog-filter';
import CatalogPageSort from '../sort/catalog-page-sort/catalog-page-sort';
import ModalContactMe from '../modal/modal-contact-me/modal-contact-me';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import CatalogPagination from '../catalog-pagination/catalog-pagination';
import { selectSortOrder, selectSortType } from '../../store/sort-process/sort-process.selectors';
import { selectCatalogCurrentPage, selectFilterState } from '../../store/filter-process/filter-process.selectors';
import { filterCamerasByPrice, getFilteredCameras } from '../../utils/filter';
import { sortCamerasByType } from '../../utils/sort';
import { useEffect, useMemo } from 'react';
import { updateSortedCameras } from '../../store/cameras-process/cameras-process.slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { CAMERAS_PER_PAGE, SearchParamsName } from '../../const';
import { changeCatalogCurrentPage } from '../../store/filter-process/filter-process.slice';

function CatalogPageContent(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(() =>new URLSearchParams(location.search), [location.search]);

  const cameras = useAppSelector(selectCameras);
  const searchPageNumber = Number(queryParams.get(SearchParamsName.Page));
  useEffect(() => {
    if (searchPageNumber > 1) {
      dispatch(changeCatalogCurrentPage(searchPageNumber));
    }
  }, [dispatch, searchPageNumber]);
  const currentPage = useAppSelector(selectCatalogCurrentPage);

  const [
    modalContactMe,
    handleModalContactMeOpen,
    handleModalContactMeClose,
    currentModalCamera
  ] = useModalContactMe({cameras});

  const currentSortOrder = useAppSelector(selectSortOrder);
  const currentSortType = useAppSelector(selectSortType);
  const wholeFilterState = useAppSelector(selectFilterState);

  const filteredCameras = getFilteredCameras(
    [...cameras],
    wholeFilterState
  );
  const sortedCameras = sortCamerasByType(filteredCameras, currentSortType, currentSortOrder);

  useEffect(() => {
    dispatch(updateSortedCameras(sortedCameras));

  }, [dispatch, sortedCameras]);

  const filteredCamerasByPrice = filterCamerasByPrice(sortedCameras, wholeFilterState.price);

  const indexOfLastItem = currentPage * CAMERAS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - CAMERAS_PER_PAGE;

  useEffect(() => {
    queryParams.set('page', String(currentPage));
    navigate({ search: queryParams.toString() });
  }, [currentPage, navigate, queryParams]);

  const currentCameras = filteredCamerasByPrice.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCamerasByPrice.length / CAMERAS_PER_PAGE);

  return (
    <section data-testid='catalogPageContent' className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogFilter cameras={cameras}/>
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
