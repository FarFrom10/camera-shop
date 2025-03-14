import { IconName } from '../../const';
import { IconSettings } from './common-icon-settings';

type CommonIconProps = {
  icon: IconName;
  iconClass?: string;
}

function CommonIcon({icon, iconClass = ''}: CommonIconProps): JSX.Element {
  return (
    <svg data-testid='svgContainer' className={iconClass} width={IconSettings[icon].width} height={IconSettings[icon].height} aria-hidden="true">
      <use data-testid='commonIcon' xlinkHref={`#${icon}`}></use>
    </svg>
  );
}

export default CommonIcon;
