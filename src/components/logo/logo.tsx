import { Link } from 'react-router-dom';
import { AppRoute, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type LogoProps = {
  isFooter?: boolean;
  isIndexPage?: boolean;
}

function Logo({isFooter = false, isIndexPage = false}: LogoProps): JSX.Element {
  if (isIndexPage) {
    return (
      <span
        className="header__logo"
      >
        <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
      </span>
    );
  }

  return (
    <Link
      className="header__logo"
      to={AppRoute.Index}
      aria-label="Переход на главную"
    >
      <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
    </Link>
  );
}

export default Logo;
