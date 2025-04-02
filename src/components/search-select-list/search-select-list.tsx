import { RefObject, useEffect, useRef, useState } from 'react';
import { SearchLength } from '../../const';
import { CameraData } from '../../types/cameras';
import SearchListEmpty from '../search-list-empty/search-list-empty';
import SearchListItem from '../search-list-item/search-list-item';
import styles from './search-select-list.module.css';
import cn from 'classnames';

type SearchSelectListProps = {
  isVisible: boolean;
  cameras: CameraData[];
  onInputReset: () => void;
  searchInputRef: RefObject<HTMLInputElement> | null;
}

function SearchSelectList({isVisible, cameras, onInputReset, searchInputRef}: SearchSelectListProps): JSX.Element {
  const camerasList = cameras.map((camera) => <SearchListItem onInputReset={onInputReset} key={camera.name} camera={camera}/>);
  const shouldScrollShow = cameras.length >= SearchLength.MinToScroll ? 'scroll' : 'hidden';
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const listRef = useRef<HTMLUListElement>(null);
  const searchInputRefCurrent = searchInputRef?.current as HTMLElement;
  const listRefCurrent = listRef?.current as HTMLElement;

  useEffect(() => {
    const handleListClose = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape'){
        onInputReset();
      }
    };

    const handleKeyDown = (evt: KeyboardEvent) => {
      if (!camerasList.length) {
        return;
      }

      switch (evt.code) {
        case 'ArrowDown':
          evt.preventDefault();
          evt.stopPropagation();
          setHighlightedIndex(() => {
            const index = highlightedIndex === camerasList.length - 1 ? -1 : highlightedIndex + 1;
            if (index === -1){
              searchInputRefCurrent.focus();
            } else {
              const listRefCurrentChildLink = listRefCurrent.children[index].children[0] as HTMLElement;
              listRefCurrentChildLink.focus();
            }

            return index;
          });
          break;
        case 'ArrowUp': {
          evt.preventDefault();
          evt.stopPropagation();
          setHighlightedIndex(() => {
            const index = highlightedIndex === -1 ? camerasList.length - 1 : highlightedIndex - 1;
            if (index === -1){
              searchInputRefCurrent.focus();
            } else {
              const listRefCurrentChildLink = listRefCurrent.children[index].children[0] as HTMLElement;
              listRefCurrentChildLink.focus();
            }

            return index;
          });
          break;
        }
        case 'Tab': {
          setHighlightedIndex(() => {
            const index = highlightedIndex === camerasList.length - 1 ? -1 : highlightedIndex + 1;
            return index;
          });
          break;
        }
      }
    };

    window.addEventListener('keydown', handleListClose);
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      window.removeEventListener('keydown', handleListClose);
      document.removeEventListener('keydown', handleKeyDown, true);
    };
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
