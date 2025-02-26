import { IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type BreadcrubmsItemProps = {
  isActive?: boolean;
  page: string;
}

function BreadcrubmsItem({isActive = false, page}: BreadcrubmsItemProps): JSX.Element {
  if (isActive) {
    return (
      <li className="breadcrumbs__item">
        <span className='breadcrumbs__link breadcrumbs__link--active'>
          {page}
        </span>
      </li>
    );
  }

  return(
    <li className="breadcrumbs__item">
      <a className='breadcrumbs__link' href="index.html">
        {page}
        <CommonIcon icon={IconName.ArrowMini}/>
      </a>
    </li>
  );
}

export default BreadcrubmsItem;
