import { IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type LogoProps = {
  isFooter?: boolean;
}

function Logo({isFooter = false}: LogoProps): JSX.Element {
  return (
    <a
      className="header__logo"
      href="index.html"
      aria-label="Переход на главную"
    >
      <CommonIcon icon={isFooter ? IconName.LogoFooter : IconName.LogoHeader}/>
    </a>
  );
}

export default Logo;
