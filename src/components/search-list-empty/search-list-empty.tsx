function SearchListEmpty(): JSX.Element {
  return (
    <li style={{pointerEvents: 'none'}} className="form-search__select-item">
      Не найдено...
    </li>
  );
}

export default SearchListEmpty;
