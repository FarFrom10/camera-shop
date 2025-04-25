import { nanoid } from '@reduxjs/toolkit';
import CatalogPaginationItem from '../catalog-pagination-item/catalog-pagination-item';
import { useAppDispatch } from '../../hooks';
import { changeCatalogCurrentPage } from '../../store/filter-process/filter-process.slice';
import { MAX_PAGES_PER_VIEW } from '../../const';
import { getSlicedPaginationItems } from '../../utils/pagination';
import { memo, useCallback, useMemo } from 'react';

type CatalogPaginationProps = {
  pagesNumber: number;
  currentPage : number;
}

function CatalogPaginationTemplate({ pagesNumber, currentPage }: CatalogPaginationProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback((pageNumber: number) => {
    dispatch(changeCatalogCurrentPage(pageNumber));
  }, [dispatch]);

  const paginationItems = useMemo(() =>Array.from({length: pagesNumber})
    .map((_, i) =>
      (
        <CatalogPaginationItem
          key={nanoid()}
          pageNumber={i + 1}
          currentPage={currentPage}
          onButtonClick={() => handleButtonClick(i + 1)}
        />
      )
    ), [currentPage, handleButtonClick, pagesNumber]);

  const slicedPaginationItems = useMemo(() => getSlicedPaginationItems(
    paginationItems,
    currentPage,
    MAX_PAGES_PER_VIEW
  ), [currentPage, paginationItems]);

  const handlePrevButtonClick = useCallback(() => {
    dispatch(changeCatalogCurrentPage(currentPage - 1));
  }, [currentPage, dispatch]);

  const handleNextButtonClick = useCallback(() => {
    const targetPageNumber = currentPage + MAX_PAGES_PER_VIEW - 1;
    const nextPage = paginationItems.length < targetPageNumber
      ? paginationItems.length
      : targetPageNumber;
    dispatch(changeCatalogCurrentPage(nextPage));
  }, [currentPage, dispatch, paginationItems.length]);

  const shouldShowNextButton = useMemo(() => paginationItems.length > MAX_PAGES_PER_VIEW && currentPage < paginationItems.length, [currentPage, paginationItems.length]);

  return (
    <div data-testid='catalogPagination' className="pagination">
      <ul className="pagination__list">
        { currentPage > 1 &&
        <CatalogPaginationItem
          currentPage={currentPage}
          onButtonClick={handlePrevButtonClick}
          linkText='Назад'
        />}

        {slicedPaginationItems}

        { shouldShowNextButton &&
        <CatalogPaginationItem
          currentPage={currentPage}
          onButtonClick={handleNextButtonClick}
          linkText='Далее'
        />}
      </ul>
    </div>
  );
}

const CatalogPagination = memo(CatalogPaginationTemplate);

export default CatalogPagination;
