import { Link } from 'react-router-dom';
import { SocialIconSize } from '../../const';

type SocialItemProps = {
  name: string;
}

function SocialItem({name}: SocialItemProps): JSX.Element {
  return (
    <li data-testid='socialItem' className="social__item">
      <Link
        data-testid='socialItemLink'
        className="link"
        to="#"
        aria-label={`Переход на страницу ${name}`}
      >
        <svg width={SocialIconSize.Width} height={SocialIconSize.Height} aria-hidden="true">
          <use data-testid='socialItemIcon' xlinkHref={`#icon-${name}`} />
        </svg>
      </Link>
    </li>
  );
}

export default SocialItem;
