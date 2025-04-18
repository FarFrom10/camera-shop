import { SortByOrder } from '../../../const';

type SettingsType = {
  [key in SortByOrder]: {text: string};
}

export const CatalogSortOrderButtonSettings: SettingsType = {
  [SortByOrder.Up]: {
    text: 'По возрастанию'
  },

  [SortByOrder.Down]: {
    text: 'По убыванию'
  },
} as const;
