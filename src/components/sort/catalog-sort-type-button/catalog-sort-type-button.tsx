import { memo, useMemo } from 'react';
import { SortByType } from '../../../const';
import { CatalogSortTypeButtonSettings } from './catalog-sort-type-button.settings';

type CatalogSortTypeButtonProps = {
  sort: SortByType;
  currentSort: SortByType;
  onSortTypeChange: (sortType: SortByType) => void;
}

function CatalogSortTypeButtonTemplate({ sort, currentSort, onSortTypeChange }: CatalogSortTypeButtonProps): JSX.Element {
  const isChecked = useMemo(() => sort === currentSort, [currentSort, sort]);

  return (
    <div className="catalog-sort__btn-text">
      <input data-testid='catalogSortTypeButton' onChange={() => onSortTypeChange(sort)} type="radio" id={sort} name="sort" checked={isChecked}/>
      <label htmlFor={sort}>{CatalogSortTypeButtonSettings[sort].text}</label>
    </div>
  );
}

const CatalogSortTypeButton = memo(CatalogSortTypeButtonTemplate);

export default CatalogSortTypeButton;
