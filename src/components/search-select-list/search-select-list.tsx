import { RefObject, useRef } from 'react';
import { SearchLength } from '../../const';
import { CameraData } from '../../types/cameras';
import SearchListEmpty from '../search-list-empty/search-list-empty';
import SearchListItem from '../search-list-item/search-list-item';
import styles from './search-select-list.module.css';
import cn from 'classnames';
import { useArrowKeysForSearchList } from '../../hooks/use-arrow-keys-for-search-list';

type SearchSelectListProps = {
  isVisible: boolean;
  cameras: CameraData[];
  onInputReset: () => void;
  searchInputRef: RefObject<HTMLInputElement> | null;
}

function SearchSelectList({
  isVisible,
  cameras,
  onInputReset,
  searchInputRef}: SearchSelectListProps): JSX.Element {

  const camerasList = cameras.map((camera) => <SearchListItem onInputReset={onInputReset} key={camera.name} camera={camera}/>);
  const shouldScrollShow = cameras.length >= SearchLength.MinToScroll ? 'scroll' : 'hidden';

  const listRef = useRef<HTMLUListElement>(null);

  useArrowKeysForSearchList({
    searchListLength: camerasList.length,
    onInputReset,
    searchInputRef,
    listRef
  });

  return (
    <ul ref={listRef} data-testid='searchSelectList'
      className={cn(
        'form-search__select-list',
        {[styles.visibleList]: isVisible}
      )}
      style={{overflowY: shouldScrollShow}}
    >
      {camerasList.length > 0 ? camerasList : <SearchListEmpty/>}
    </ul>
  );
}

export default SearchSelectList;
