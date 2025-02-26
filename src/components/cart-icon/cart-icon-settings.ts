import { CartIconName } from '../../const';

type SettingsType = {
  [key: string]: {width: number; height: number};
}

export const CartIconSettings: SettingsType = {
  [CartIconName.Added]: {
    width: 16,
    height: 16,
  },
  [CartIconName.Add]: {
    width: 24,
    height: 16,
  },
} as const;
