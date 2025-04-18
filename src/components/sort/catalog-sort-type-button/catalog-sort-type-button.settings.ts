import { SortByType } from '../../../const';

type SettingsType = {
  [key in SortByType]: {text: string};
}

export const CatalogSortTypeButtonSettings: SettingsType = {
  [SortByType.Price]: {
    text: 'по цене'
  },

  [SortByType.Popular]: {
    text: 'по популярности'
  },
} as const;
