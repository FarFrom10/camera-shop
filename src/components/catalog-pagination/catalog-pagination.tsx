import { nanoid } from '@reduxjs/toolkit';
import CatalogPaginationItem from '../catalog-pagination-item/catalog-pagination-item';
import { useAppDispatch } from '../../hooks';
import { changeCatalogCurrentPage } from '../../store/filter-process/filter-process.slice';
import { MAX_PAGES_PER_VIEW } from '../../const';
import { getSlicedPaginationItems } from '../../utils/pagination';

type CatalogPaginationProps = {
  pagesNumber: number;
  currentPage : number;
}

function CatalogPagination({ pagesNumber, currentPage }: CatalogPaginationProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleButtonClick = (pageNumber: number) => {
    dispatch(changeCatalogCurrentPage(pageNumber));
  };

  const paginationItems = Array.from({length: pagesNumber})
    .map((_, i) =>
      (
        <CatalogPaginationItem
          key={nanoid()}
          pageNumber={i + 1}
          currentPage={currentPage}
          onButtonClick={() => handleButtonClick(i + 1)}
        />
      )
    );

  const slicedPaginationItems = getSlicedPaginationItems(
    paginationItems,
    currentPage,
    MAX_PAGES_PER_VIEW
  );

  const handlePrevButtonClick = () => {
    dispatch(changeCatalogCurrentPage(currentPage - 1));
  };

  const handleNextButtonClick = () => {
    const targetPageNumber = currentPage + MAX_PAGES_PER_VIEW - 1;
    const nextPage = paginationItems.length < targetPageNumber
      ? paginationItems.length
      : targetPageNumber;
    dispatch(changeCatalogCurrentPage(nextPage));
  };

  const shouldShowNextButton = paginationItems.length > MAX_PAGES_PER_VIEW && currentPage < paginationItems.length;

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

export default CatalogPagination;
