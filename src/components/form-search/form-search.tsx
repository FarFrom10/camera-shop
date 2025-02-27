import { IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import SearchSelectList from '../search-select-list/search-select-list';

function FormSearch(): JSX.Element {
  return (
    <div className="form-search">
      <form>
        <label>
          <CommonIcon icon={IconName.Lens} iconClass='form-search__icon'/>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
          />
        </label>
        <SearchSelectList/>
      </form>
      <button className="form-search__reset" type="reset">
        <CommonIcon icon={IconName.Close}/>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;
