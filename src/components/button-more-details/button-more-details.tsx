import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type ButtonMoreDetailsProps = {
  isTransparent?: boolean;
}

function ButtonMoreDetails({isTransparent = true}: ButtonMoreDetailsProps):JSX.Element {

  return (
    <Link className={cn(
      'btn',
      {'btn--transparent': isTransparent}
    )} to={AppRoute.Product}
    >
      Подробнее
    </Link>
  );
}

export default ButtonMoreDetails;
