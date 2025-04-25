import { useEffect, useMemo } from 'react';
import { CameraData } from '../types/cameras';
import { useAppDispatch, useAppSelector } from '.';
import { selectCatalogCurrentPage } from '../store/filter-process/filter-process.selectors';
import { changeCatalogCurrentPage } from '../store/filter-process/filter-process.slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { CAMERAS_PER_PAGE, SearchParamsName } from '../const';

type UsePaginationCatalogData = [
  currentCameras: CameraData[],
  currentPage: number,
  totalPages: number,
]

type UsePaginationCatalogProps = {
  filteredCamerasByPrice: CameraData[];
}

export const usePaginationCatalog = ({filteredCamerasByPrice}: UsePaginationCatalogProps): UsePaginationCatalogData => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(() =>new URLSearchParams(location.search), [location.search]);

  const searchPageNumber = Number(queryParams.get(SearchParamsName.Page));
  useEffect(() => {
    if (searchPageNumber > 1) {
      dispatch(changeCatalogCurrentPage(searchPageNumber));
    }
  }, [dispatch, searchPageNumber]);
  const currentPage = useAppSelector(selectCatalogCurrentPage);


  const indexOfLastItem = useMemo(() => currentPage * CAMERAS_PER_PAGE, [currentPage]);
  const indexOfFirstItem = useMemo(() => indexOfLastItem - CAMERAS_PER_PAGE, [indexOfLastItem]);

  useEffect(() => {
    queryParams.set('page', String(currentPage));
    navigate({ search: queryParams.toString() });
  }, [currentPage, navigate, queryParams]);

  const currentCameras = useMemo(() => filteredCamerasByPrice.slice(indexOfFirstItem, indexOfLastItem), [filteredCamerasByPrice, indexOfFirstItem, indexOfLastItem]);
  const totalPages = useMemo(() => Math.ceil(filteredCamerasByPrice.length / CAMERAS_PER_PAGE), [filteredCamerasByPrice.length]);

  return [currentCameras, currentPage, totalPages];
};
