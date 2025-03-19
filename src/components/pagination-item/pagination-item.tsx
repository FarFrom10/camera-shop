import { Link } from 'react-router-dom';
import cn from 'classnames';

type PaginationItemProps = {
  isActive?: boolean;
  title: number | string;
}

function PaginationItem({isActive = false, title}: PaginationItemProps): JSX.Element {
  return (
    <li className="pagination__item">
      <Link className={cn(
        'pagination__link',
        {'pagination__link--active': isActive}
      )} to="#"
      >
        {title}
      </Link>
    </li>
  );
}

export default PaginationItem;
