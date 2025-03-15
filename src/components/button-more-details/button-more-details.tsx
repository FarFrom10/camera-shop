import cn from 'classnames';
import { Link } from 'react-router-dom';

type ButtonMoreDetailsProps = {
  isTransparent?: boolean;
  route: string;
}

function ButtonMoreDetails({isTransparent = true, route}: ButtonMoreDetailsProps):JSX.Element {

  return (
    <Link data-testid="buttonMoreDetailsLink" className={cn(
      'btn',
      {'btn--transparent': isTransparent}
    )} to={route}
    >
      Подробнее
    </Link>
  );
}

export default ButtonMoreDetails;
