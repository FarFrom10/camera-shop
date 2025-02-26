import { IconName } from '../../const';
import { IconSettings } from './common-icon-settings';

type CommonIconProps = {
  icon: IconName;
}

function CommonIcon({icon}: CommonIconProps): JSX.Element {
  return (
    <svg width={IconSettings[icon].width} height={IconSettings[icon].height} aria-hidden="true">
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}

export default CommonIcon;
