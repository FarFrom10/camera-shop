import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, SearchParamsName } from '../../const';

type CatalogPaginationItemProps = {
  pageNumber?: number;
  currentPage: number;
  onButtonClick: () => void;
  linkText?: string;
}

function CatalogPaginationItem({ pageNumber, currentPage, onButtonClick, linkText }: CatalogPaginationItemProps): JSX.Element {
  const isActive = pageNumber && pageNumber === currentPage;

  const route = pageNumber
    ? `${AppRoute.Index}?${SearchParamsName.Page}=${pageNumber}`
    : `${AppRoute.Index}?${SearchParamsName.Page}=${currentPage}`;

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

export default CatalogPaginationItem;
