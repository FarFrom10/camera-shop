import { nanoid } from '@reduxjs/toolkit';
import CatalogPaginationItem from '../catalog-pagination-item/catalog-pagination-item';
import { useAppDispatch } from '../../hooks';
import { changeCatalogCurrentPage } from '../../store/filter-process/filter-process.slice';

type CatalogPaginationProps = {
  pagesNumber: number;
  currentPage : number;
}

function CatalogPagination({ pagesNumber, currentPage }: CatalogPaginationProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLinkClick = (pageNumber: number) => {
    dispatch(changeCatalogCurrentPage(pageNumber));
  };

  const paginationItems = Array.from({length: pagesNumber})
    .map((_, i) =>
      (
        <CatalogPaginationItem
          key={nanoid()}
          pageNumber={i + 1}
          currentPage={currentPage}
          onLinkClick={() => handleLinkClick(i + 1)}
        />
      )
    );

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {paginationItems}
      </ul>
    </div>

  );
}

export default CatalogPagination;
