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
  [IconName.Lens]: {
    width: 16,
    height: 16,
  },
  [IconName.Close]: {
    width: 10,
    height: 10,
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
  [IconName.ArrowUp]: {
    width: 12,
    height: 18,
  },
  [IconName.ArrowSide]: {
    width: 7,
    height: 12,
  },
  [IconName.Star]: {
    width: 17,
    height: 16,
  },
  [IconName.StarFull]: {
    width: 17,
    height: 16,
  },
  [IconName.Snowflake]: {
    width: 9,
    height: 9,
  },
  [IconName.Sort]: {
    width: 16,
    height: 14,
  },
  [IconName.Success]: {
    width:86,
    height: 80,
  },
} as const;
