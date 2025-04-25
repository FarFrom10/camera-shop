import { memo, useCallback, useMemo } from 'react';
import { SortByType } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectSortType } from '../../../store/sort-process/sort-process.selectors';
import { changeSortType } from '../../../store/sort-process/sort-process.slice';
import CatalogSortTypeButton from '../catalog-sort-type-button/catalog-sort-type-button';

function CatalogSortTypeTemplate(): JSX.Element {
  const currentSortType = useAppSelector(selectSortType);
  const dispatch = useAppDispatch();

  const handleSortTypeChange = useCallback((sortType: SortByType) => dispatch(changeSortType(sortType)), [dispatch]);

  const sortButtons = useMemo(() => Object.values(SortByType).map((sort) =>
    (
      <CatalogSortTypeButton
        sort={sort}
        currentSort={currentSortType}
        key={sort}
        onSortTypeChange={handleSortTypeChange}
      />)
  ), [currentSortType, handleSortTypeChange]);

  return (
    <div data-testid='catalogSortType' className="catalog-sort__type">
      {sortButtons}
    </div>
  );
}

const CatalogSortType = memo(CatalogSortTypeTemplate);

export default CatalogSortType;
