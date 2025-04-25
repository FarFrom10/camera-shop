import { memo, useCallback, useMemo } from 'react';
import { SortByOrder } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectSortOrder } from '../../../store/sort-process/sort-process.selectors';
import { changeSortOrder } from '../../../store/sort-process/sort-process.slice';
import CatalogSortOrderButton from '../catalog-sort-order-button/catalog-sort-order-button';

function CatalogSortOrderTemplate(): JSX.Element {
  const currentSortType = useAppSelector(selectSortOrder);
  const dispatch = useAppDispatch();

  const handleSortOrderChange = useCallback((sortOrder: SortByOrder) => dispatch(changeSortOrder(sortOrder)), [dispatch]);

  const sortButtons = useMemo(() => Object.values(SortByOrder).map((sort) =>
    (
      <CatalogSortOrderButton
        sort={sort}
        currentSort={currentSortType}
        key={sort}
        onSortOrderChange={handleSortOrderChange}
      />)
  ), [currentSortType, handleSortOrderChange]);

  return (
    <div data-testid='catalogSortOrder' className="catalog-sort__order">
      {sortButtons}
    </div>
  );
}

const CatalogSortOrder = memo(CatalogSortOrderTemplate);

export default CatalogSortOrder;
