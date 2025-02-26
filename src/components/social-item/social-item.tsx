import { SocialIconSize } from '../../const';

type SocialItemProps = {
  name: string;
}

function SocialItem({name}: SocialItemProps): JSX.Element {
  return (
    <li className="social__item">
      <a
        className="link"
        href="#"
        aria-label={`Переход на страницу ${name === 'vk' ? 'вконтакте' : name}`}
      >
        <svg width={SocialIconSize.Width} height={SocialIconSize.Height} aria-hidden="true">
          <use xlinkHref={`#icon-${name}`} />
        </svg>
      </a>
    </li>
  );
}

export default SocialItem;
