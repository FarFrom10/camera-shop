import { useEffect } from 'react';
import { CameraData } from '../types/cameras';
import { useAppDispatch, useAppSelector } from '.';
import { selectSortOrder, selectSortType } from '../store/sort-process/sort-process.selectors';
import { selectFilterState } from '../store/filter-process/filter-process.selectors';
import { filterCamerasByPrice, getFilteredCameras } from '../utils/filter';
import { sortCamerasByType } from '../utils/sort';
import { updateSortedCameras } from '../store/cameras-process/cameras-process.slice';

type UseFilterCatalogData = [
  filteredCamerasByPrice: CameraData[]
]

type UseFilterCatalogProps = {
  cameras: CameraData[];
}

export const useFilterCatalog = ({cameras}: UseFilterCatalogProps): UseFilterCatalogData => {
  const dispatch = useAppDispatch();

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

  return [filteredCamerasByPrice];
};
