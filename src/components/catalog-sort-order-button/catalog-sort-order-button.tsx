import { IconName, SortByOrder } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { CatalogSortOrderButtonSettings } from './catalog-sort-order-button.settings';

type CatalogSortOrderButtonOrder = {
  sort: SortByOrder;
  currentSort: SortByOrder;
  onSortOrderChange: (sortOrder: SortByOrder) => void;
}

function CatalogSortOrderButton({sort, currentSort, onSortOrderChange}: CatalogSortOrderButtonOrder): JSX.Element {
  const isChecked = sort === currentSort;

  return (
    <div className={`catalog-sort__btn catalog-sort__btn--${sort}`}>
      <input
        data-testid='catalogSortOrderButton'
        onChange={() => onSortOrderChange(sort)}
        type="radio"
        id={sort}
        name="sort-icon"
        aria-label={CatalogSortOrderButtonSettings[sort].text}
        checked={isChecked}
      />
      <label htmlFor={sort}>
        <CommonIcon icon={IconName.Sort}/>
      </label>
    </div>
  );
}

export default CatalogSortOrderButton;
