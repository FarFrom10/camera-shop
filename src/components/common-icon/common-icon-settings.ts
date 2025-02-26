import { IconName } from '../../const';

type SettingsType = {
  [key: string]: {width: number; height: number};
}

export const IconSettings: SettingsType = {
  [IconName.CartAdded]: {
    width: 16,
    height: 16,
  },
  [IconName.CartAdd]: {
    width: 24,
    height: 16,
  },
  [IconName.LogoFooter]: {
    width: 100,
    height: 36,
  },
  [IconName.LogoHeader]: {
    width: 100,
    height: 36,
  },
  [IconName.ArrowMini]: {
    width: 5,
    height: 8,
  },
  [IconName.Star]: {
    width: 17,
    height: 16,
  },
  [IconName.StarFull]: {
    width: 17,
    height: 16,
  },
} as const;
