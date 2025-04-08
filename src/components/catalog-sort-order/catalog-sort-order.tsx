import { SortByOrder } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSortOrder } from '../../store/sort-process/sort-process.selectors';
import { changeSortOrder } from '../../store/sort-process/sort-process.slice';
import CatalogSortOrderButton from '../catalog-sort-order-button/catalog-sort-order-button';

function CatalogSortOrder(): JSX.Element {
  const currentSortType = useAppSelector(selectSortOrder);
  const dispatch = useAppDispatch();

  const handleSortOrderChange = (sortOrder: SortByOrder) => dispatch(changeSortOrder(sortOrder));

  const sortButtons = Object.values(SortByOrder).map((sort) =>
    (
      <CatalogSortOrderButton
        sort={sort}
        currentSort={currentSortType}
        key={sort}
        onSortOrderChange={handleSortOrderChange}
      />)
  );

  return (
    <div data-testid='catalogSortOrder' className="catalog-sort__order">
      {sortButtons}
    </div>
  );
}

export default CatalogSortOrder;
