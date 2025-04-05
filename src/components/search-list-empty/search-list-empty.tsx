import { EMPTY_SEARCH_LIST_TEXT } from '../../const';

function SearchListEmpty(): JSX.Element {
  return (
    <li style={{pointerEvents: 'none'}} className="form-search__select-item">
      {EMPTY_SEARCH_LIST_TEXT}
    </li>
  );
}

export default SearchListEmpty;
