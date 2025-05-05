import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { selectSortOrder, selectSortType } from '../store/sort-process/sort-process.selectors';
import { SearchParamsName, SortByOrder, SortByType } from '../const';
import { useEffect } from 'react';
import { isValueFilterCategory, isValueSortOrder, isValueSortType } from '../utils/type';
import { changeCameraType, changeCatalogCurrentPage, changeCategory, changeLevel, changeMaxPrice, changeMinPrice } from '../store/filter-process/filter-process.slice';
import { convertFilterCheckboxesToString, convertStringCheckboxesToObject, isFiltersUnused } from '../utils/filter';
import { FilterProcess } from '../types/state';
import { FilterCameraType, FilterLevel } from '../types/types';
import { changeSortOrder, changeSortType } from '../store/sort-process/sort-process.slice';

type UseCatalogSearchProps = {
  wholeFilterState: FilterProcess;
}

export const useCatalogSearchParams = ({wholeFilterState}: UseCatalogSearchProps) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortType = useAppSelector(selectSortType);
  const sortOrder = useAppSelector(selectSortOrder);

  const searchPageNumber = Number(searchParams.get(SearchParamsName.Page));
  const searchCategory = searchParams.get(SearchParamsName.Category);
  const searchType = searchParams.get(SearchParamsName.Type);
  const searchLevel = searchParams.get(SearchParamsName.Level);
  const searchPriceMin = searchParams.get(SearchParamsName.PriceMin);
  const searchPriceMax = searchParams.get(SearchParamsName.PriceMax);
  const searchSortType = searchParams.get(SearchParamsName.SortType);
  const searchSortOrder = searchParams.get(SearchParamsName.SortOrder);

  //Однократное использование search-параметров при загрузке страницы
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

  //Обновление search-параметров
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
  },
  [
    wholeFilterState,
    searchPageNumber,
    searchParams,
    searchSortOrder,
    searchSortType,
    setSearchParams,
    sortOrder,
    sortType
  ]);
};
