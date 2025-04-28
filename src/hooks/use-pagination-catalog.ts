import { useMemo } from 'react';
import { CameraData } from '../types/cameras';
import { useAppSelector } from '.';
import { selectCatalogCurrentPage } from '../store/filter-process/filter-process.selectors';
import { CAMERAS_PER_PAGE } from '../const';

type UsePaginationCatalogData = [
  currentCameras: CameraData[],
  currentPage: number,
  totalPages: number,
]

type UsePaginationCatalogProps = {
  filteredCamerasByPrice: CameraData[];
}

export const usePaginationCatalog = ({
  filteredCamerasByPrice
}: UsePaginationCatalogProps): UsePaginationCatalogData => {
  const currentPage = useAppSelector(selectCatalogCurrentPage);

  const indexOfLastItem = useMemo(() => currentPage * CAMERAS_PER_PAGE, [currentPage]);
  const indexOfFirstItem = useMemo(() => indexOfLastItem - CAMERAS_PER_PAGE, [indexOfLastItem]);

  const currentCameras = useMemo(() => filteredCamerasByPrice.slice(indexOfFirstItem, indexOfLastItem), [filteredCamerasByPrice, indexOfFirstItem, indexOfLastItem]);
  const totalPages = useMemo(() => Math.ceil(filteredCamerasByPrice.length / CAMERAS_PER_PAGE), [filteredCamerasByPrice.length]);

  return [currentCameras, currentPage, totalPages];
};
