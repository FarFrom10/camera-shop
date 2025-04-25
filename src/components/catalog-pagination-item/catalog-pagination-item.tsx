import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, SearchParamsName } from '../../const';
import { memo, useMemo } from 'react';

type CatalogPaginationItemProps = {
  pageNumber?: number;
  currentPage: number;
  onButtonClick: () => void;
  linkText?: string;
}

function CatalogPaginationItemTemplate({ pageNumber, currentPage, onButtonClick, linkText }: CatalogPaginationItemProps): JSX.Element {
  const isActive = useMemo(() => pageNumber && pageNumber === currentPage, [currentPage, pageNumber]);

  const route = useMemo(() => pageNumber
    ? `${AppRoute.Index}?${SearchParamsName.Page}=${pageNumber}`
    : `${AppRoute.Index}?${SearchParamsName.Page}=${currentPage}`
  , [currentPage, pageNumber]);

  return (
    <li data-testid='catalogPaginationItem' className="pagination__item">
      <Link
        data-testid='catalogPaginationButton'
        onClick={onButtonClick}
        to={route}
        className={cn(
          'pagination__link',
          {'pagination__link--active': isActive}
        )}
      >
        {linkText || pageNumber}
      </Link>
    </li>
  );
}

const CatalogPaginationItem = memo(CatalogPaginationItemTemplate);

export default CatalogPaginationItem;
