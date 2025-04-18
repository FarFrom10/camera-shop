import { SortByType } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectSortType } from '../../../store/sort-process/sort-process.selectors';
import { changeSortType } from '../../../store/sort-process/sort-process.slice';
import CatalogSortTypeButton from '../catalog-sort-type-button/catalog-sort-type-button';

function CatalogSortType(): JSX.Element {
  const currentSortType = useAppSelector(selectSortType);
  const dispatch = useAppDispatch();

  const handleSortTypeChange = (sortType: SortByType) => dispatch(changeSortType(sortType));

  const sortButtons = Object.values(SortByType).map((sort) =>
    (
      <CatalogSortTypeButton
        sort={sort}
        currentSort={currentSortType}
        key={sort}
        onSortTypeChange={handleSortTypeChange}
      />)
  );

  return (
    <div data-testid='catalogSortType' className="catalog-sort__type">
      {sortButtons}
    </div>
  );
}

export default CatalogSortType;
