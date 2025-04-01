import { SearchLength } from '../../const';
import { CameraData } from '../../types/cameras';
import SearchListEmpty from '../search-list-empty/search-list-empty';
import SearchListItem from '../search-list-item/search-list-item';

type SearchSelectListProps = {
  isVisible: boolean;
  cameras: CameraData[];
  onInputReset: () => void;
}

function SearchSelectList({isVisible, cameras, onInputReset}: SearchSelectListProps): JSX.Element {
  const camerasList = cameras.map((camera) => <SearchListItem onInputReset={onInputReset} key={camera.name} camera={camera}/>);
  const shouldScrollShow = cameras.length >= SearchLength.MinToScroll ? 'scroll' : 'hidden';

  return (
    <ul data-testid='searchSelectList'
      className="form-search__select-list"
      style={isVisible ? {
        visibility: 'visible',
        opacity: '1',
        overflowY: shouldScrollShow
      } : {}}
    >
      {camerasList.length > 0 ? camerasList : <SearchListEmpty/>}
    </ul>
  );
}

export default SearchSelectList;
