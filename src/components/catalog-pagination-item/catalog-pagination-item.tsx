import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, SearchParamsName } from '../../const';

type CatalogPaginationItemProps = {
  pageNumber: number;
  currentPage: number;
  onLinkClick: () => void;
}

function CatalogPaginationItem({ pageNumber, currentPage, onLinkClick }: CatalogPaginationItemProps): JSX.Element {
  const isActive = pageNumber === currentPage;

  return (
    <li className="pagination__item">
      <Link
        onClick={onLinkClick}
        to={`${AppRoute.Index}?${SearchParamsName.Page}=${pageNumber}`}
        className={cn(
          'pagination__link',
          {'pagination__link--active': isActive}
        )}
      >
        {pageNumber}
      </Link>
    </li>
  );
}

export default CatalogPaginationItem;
