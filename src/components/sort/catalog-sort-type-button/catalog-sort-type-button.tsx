import { SortByType } from '../../../const';
import { CatalogSortTypeButtonSettings } from './catalog-sort-type-button.settings';

type CatalogSortTypeButtonProps = {
  sort: SortByType;
  currentSort: SortByType;
  onSortTypeChange: (sortType: SortByType) => void;
}

function CatalogSortTypeButton({ sort, currentSort, onSortTypeChange }: CatalogSortTypeButtonProps): JSX.Element {
  const isChecked = sort === currentSort;

  return (
    <div className="catalog-sort__btn-text">
      <input data-testid='catalogSortTypeButton' onChange={() => onSortTypeChange(sort)} type="radio" id={sort} name="sort" checked={isChecked}/>
      <label htmlFor={sort}>{CatalogSortTypeButtonSettings[sort].text}</label>
    </div>
  );
}

export default CatalogSortTypeButton;
