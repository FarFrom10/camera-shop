import { RefObject, useEffect, useState } from 'react';

type UseArrowKeysForSearchListProps = {
  searchListLength: number;
  onInputReset: () => void;
  searchInputRef: RefObject<HTMLInputElement> | null;
  listRef: RefObject<HTMLUListElement>;
}

export const useArrowKeysForSearchList = ({
  searchListLength,
  onInputReset,
  searchInputRef,
  listRef
}: UseArrowKeysForSearchListProps) => {

  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const searchInputRefCurrent = searchInputRef?.current as HTMLElement;

  useEffect(() => {
    const handleListClose = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape'){
        onInputReset();
      }
    };

    const handleKeyDown = (evt: KeyboardEvent) => {
      if (!searchListLength) {
        return;
      }

      switch (evt.code) {
        case 'ArrowDown':
          evt.preventDefault();
          evt.stopPropagation();
          setHighlightedIndex(() => {
            const index = highlightedIndex === searchListLength - 1 ? -1 : highlightedIndex + 1;
            if (index === -1){
              searchInputRefCurrent.focus();
            } else {
              const listRefCurrent = listRef?.current as HTMLElement;
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
            const index = highlightedIndex === -1 ? searchListLength - 1 : highlightedIndex - 1;
            if (index === -1){
              searchInputRefCurrent.focus();
            } else {
              const listRefCurrent = listRef?.current as HTMLElement;
              const listRefCurrentChildLink = listRefCurrent.children[index].children[0] as HTMLElement;
              listRefCurrentChildLink.focus();
            }

            return index;
          });
          break;
        }
        case 'Tab': {
          setHighlightedIndex(() => {
            const index = highlightedIndex === searchListLength - 1 ? -1 : highlightedIndex + 1;
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
};
