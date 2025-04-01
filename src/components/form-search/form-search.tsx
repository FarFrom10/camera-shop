import { ChangeEvent, useState } from 'react';
import { IconName, SearchLength } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import SearchSelectList from '../search-select-list/search-select-list';
import { useAppSelector } from '../../hooks';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';

function FormSearch(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const isSearchVisible = searchValue.length >= SearchLength.Min;

  const cameras = useAppSelector(selectCameras);
  const filteredCameras = isSearchVisible
    ? cameras.filter((camera) => camera.name.toLowerCase().includes(searchValue.toLowerCase()))
    : [];

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => setSearchValue(evt.target.value);
  const handleInputReset = () => setSearchValue('');

  return (
    <div data-testid='formSearch' className="form-search">
      <form>
        <label>
          <CommonIcon icon={IconName.Lens} iconClass='form-search__icon'/>
          <input
            className="form-search__input"
            type="text"
            onChange={handleInputChange}
            value={searchValue}
            autoComplete="off"
            placeholder="Поиск по сайту"
          />
        </label>
        {isSearchVisible && <SearchSelectList onInputReset={handleInputReset} isVisible={isSearchVisible} cameras={filteredCameras}/>}
      </form>
      <button
        className="form-search__reset" type="reset"
        style={isSearchVisible ? {display: 'block'} : {}}
        onClick={handleInputReset}
      >
        <CommonIcon icon={IconName.Close}/>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;
