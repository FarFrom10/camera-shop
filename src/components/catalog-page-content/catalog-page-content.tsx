import { useAppDispatch, useAppSelector } from '../../hooks';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';
import CatalogCards from '../catalog-cards/catalog-cards';
import CatalogFilter from '../filter/catalog-filter/catalog-filter';
import CatalogPageSort from '../sort/catalog-page-sort/catalog-page-sort';
import ModalContactMe from '../modal/modal-contact-me/modal-contact-me';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import CatalogPagination from '../catalog-pagination/catalog-pagination';
import { CAMERAS_PER_PAGE, SearchParamsName, SortByOrder, SortByType } from '../../const';
import { useFilterCatalog } from '../../hooks/use-filter-catalog';
import { usePaginationCatalog } from '../../hooks/use-pagination-catalog';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { changeCameraType, changeCatalogCurrentPage, changeCategory, changeLevel, changeMaxPrice, changeMinPrice } from '../../store/filter-process/filter-process.slice';
import { isValueFilterCategory, isValueSortOrder, isValueSortType } from '../../utils/type';
import { selectFilterState } from '../../store/filter-process/filter-process.selectors';
import { convertStringCheckboxesToObject, convertFilterCheckboxesToString, isFiltersUnused } from '../../utils/filter';
import { FilterCameraType, FilterLevel } from '../../types/types';
import { selectSortOrder, selectSortType } from '../../store/sort-process/sort-process.selectors';
import { changeSortOrder, changeSortType } from '../../store/sort-process/sort-process.slice';

function CatalogPageContent(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const cameras = useAppSelector(selectCameras);
  const wholeFilterState = useAppSelector(selectFilterState);
  const sortType = useAppSelector(selectSortType);
  const sortOrder = useAppSelector(selectSortOrder);

  //=================================================================================
  const searchPageNumber = Number(searchParams.get(SearchParamsName.Page));
  const searchCategory = searchParams.get(SearchParamsName.Category);
  const searchType = searchParams.get(SearchParamsName.Type);
  const searchLevel = searchParams.get(SearchParamsName.Level);
  const searchPriceMin = searchParams.get(SearchParamsName.PriceMin);
  const searchPriceMax = searchParams.get(SearchParamsName.PriceMax);
  const searchSortType = searchParams.get(SearchParamsName.SortType);
  const searchSortOrder = searchParams.get(SearchParamsName.SortOrder);

  useEffect(() => {
    if (searchCategory && isValueFilterCategory(searchCategory)) {
      dispatch(changeCategory(searchCategory));
    }

    if (searchType) {
      const updatedState = convertStringCheckboxesToObject(searchType, wholeFilterState.cameraType);
      dispatch(changeCameraType(updatedState as FilterCameraType));
    }

    if (searchLevel) {
      const updatedState = convertStringCheckboxesToObject(searchLevel, wholeFilterState.level);
      dispatch(changeLevel(updatedState as FilterLevel));
    }

    if (searchPriceMin) {
      dispatch(changeMinPrice(searchPriceMin));
    }

    if (searchPriceMax) {
      dispatch(changeMaxPrice(searchPriceMax));
    }

    if (searchSortType && isValueSortType(searchSortType)) {
      dispatch(changeSortType(searchSortType));
    }

    if (searchSortOrder && isValueSortOrder(searchSortOrder)) {
      dispatch(changeSortOrder(searchSortOrder));
    }

    //Страницу надо менять в последнюю очередь, так как все остальные фильтры сбрасывают её
    if (searchPageNumber > 1) {
      dispatch(changeCatalogCurrentPage(searchPageNumber));
    }

    //Отключил проверку массива зависимсотей, так как эффект должен срабоать лишь раз
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (wholeFilterState.category) {
      newSearchParams.set(SearchParamsName.Category, wholeFilterState.category);
    } else {
      newSearchParams.delete(SearchParamsName.Category);
    }

    if (!isFiltersUnused(wholeFilterState.cameraType)) {
      const cameraTypes = convertFilterCheckboxesToString(wholeFilterState.cameraType);
      newSearchParams.set(SearchParamsName.Type, cameraTypes);
    } else {
      newSearchParams.delete(SearchParamsName.Type);
    }

    if (!isFiltersUnused(wholeFilterState.level)) {
      const levels = convertFilterCheckboxesToString(wholeFilterState.level);
      newSearchParams.set(SearchParamsName.Level, levels);
    } else {
      newSearchParams.delete(SearchParamsName.Level);
    }

    if (wholeFilterState.catalogCurrentPage > 1) {
      newSearchParams.set(SearchParamsName.Page, String(wholeFilterState.catalogCurrentPage));
    } else {
      newSearchParams.delete(SearchParamsName.Page);
    }

    if (wholeFilterState.price.min) {
      newSearchParams.set(SearchParamsName.PriceMin, String(wholeFilterState.price.min));
    } else {
      newSearchParams.delete(SearchParamsName.PriceMin);
    }

    if (wholeFilterState.price.max) {
      newSearchParams.set(SearchParamsName.PriceMax, String(wholeFilterState.price.max));
    } else {
      newSearchParams.delete(SearchParamsName.PriceMax);
    }

    setSearchParams(newSearchParams);
  }, [wholeFilterState, searchParams, setSearchParams, searchPageNumber]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (sortType !== SortByType.Price) {
      newSearchParams.set(SearchParamsName.SortType, sortType);
    } else {
      newSearchParams.delete(SearchParamsName.SortType);
    }

    if (sortOrder !== SortByOrder.Up) {
      newSearchParams.set(SearchParamsName.SortOrder, sortOrder);
    } else {
      newSearchParams.delete(SearchParamsName.SortOrder);
    }

    setSearchParams(newSearchParams);
  }, [searchParams, searchSortOrder, searchSortType, setSearchParams, sortOrder, sortType]);
  //=================================================================================

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
          <CatalogFilter
            cameras={cameras}
            currentMinPrice={wholeFilterState.price.min}
            currentMaxPrice={wholeFilterState.price.max}
          />
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
