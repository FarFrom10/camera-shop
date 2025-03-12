import { Link } from 'react-router-dom';
import { AppRoute, IconName, LogoClass } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type LogoProps = {
  isFooter?: boolean;
  isIndexPage?: boolean;
}

function Logo({isFooter = false, isIndexPage = false}: LogoProps): JSX.Element {
  if (isIndexPage) {
    return (
      <span
        data-testid='logo-span'
        className={isFooter ? LogoClass.Footer : LogoClass.Header}
      >
        <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
      </span>
    );
  }

  return (
    <Link
      data-testid='logo-link'
      className={isFooter ? LogoClass.Footer : LogoClass.Header}
      to={AppRoute.Index}
      aria-label="Переход на главную"
    >
      <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
    </Link>
  );
}

export default Logo;
