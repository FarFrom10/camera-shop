import { CommonPictureCategory } from '../../const';

type SettingsType = {
  [key in CommonPictureCategory]: {width: number; height: number};
}

export const ImageSettings: SettingsType = {
  [CommonPictureCategory.ProductCard]: {
    width: 280,
    height: 240,
  },
  [CommonPictureCategory.ProductPage]: {
    width: 560,
    height: 480,
  },
  [CommonPictureCategory.BasketItem]: {
    width: 140,
    height: 120,
  },
  [CommonPictureCategory.Banner]: {
    width: 1280,
    height: 280,
  },
} as const;
