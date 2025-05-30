import { MAX_PAGES_PER_VIEW } from '../const';

export function getSlicedPaginationItems(paginationItems: JSX.Element[], currentPage: number, maxLength: number): JSX.Element[]{
  const currentPageIndex = currentPage - 1;
  if (paginationItems.length <= maxLength) {
    return paginationItems;
  }

  const slicedItems = paginationItems.slice(currentPageIndex);
  return slicedItems.length < maxLength
    ? paginationItems.slice(-MAX_PAGES_PER_VIEW)
    : slicedItems.slice(0, maxLength);
}
