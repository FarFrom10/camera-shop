import { Link } from 'react-router-dom';
import { AppRoute, IconName, LogoClass } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { memo } from 'react';

type LogoProps = {
  isFooter?: boolean;
  isIndexPage?: boolean;
}

function LogoTemplate({isFooter = false, isIndexPage = false}: LogoProps): JSX.Element {
  if (isIndexPage) {
    return (
      <span
        data-testid='logoSpan'
        className={isFooter ? LogoClass.Footer : LogoClass.Header}
      >
        <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
      </span>
    );
  }

  return (
    <Link
      data-testid='logoLink'
      className={isFooter ? LogoClass.Footer : LogoClass.Header}
      to={AppRoute.Index}
      aria-label="Переход на главную"
    >
      <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
    </Link>
  );
}

const Logo = memo(LogoTemplate);

export default Logo;
