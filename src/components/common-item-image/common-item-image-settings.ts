import { ItemImageCategory } from '../../const';

type SettingsType = {
  [key in ItemImageCategory]: {width: number; height: number};
}

export const ImageSettings: SettingsType = {
  [ItemImageCategory.ProductCard]: {
    width: 280,
    height: 240,
  },
  [ItemImageCategory.ProductPage]: {
    width: 560,
    height: 480,
  },
  [ItemImageCategory.BasketItem]: {
    width: 140,
    height: 120,
  },
} as const;
