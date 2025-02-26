import { LogoIconName, LogoSize } from '../../const';

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
      <svg width={LogoSize.Width} height={LogoSize.Height} aria-hidden="true">
        <use xlinkHref={isFooter ? `#${LogoIconName.Footer}` : `#${LogoIconName.Header}`} />
      </svg>
    </a>
  );
}

export default Logo;
