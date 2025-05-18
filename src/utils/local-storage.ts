import { BasketItemData } from '../types/cameras';

export const loadBasketItemsState = (): BasketItemData[] => {
  try {
    const data = localStorage.getItem('basket');
    if (!data) {
      return [];
    }
    return JSON.parse(data) as BasketItemData[];
  } catch (err) {
    return [];
  }
};

export const saveBasketItemsState = (basketData: BasketItemData[]): void => {
  try {
    localStorage.setItem('basket', JSON.stringify(basketData));
  } catch (err) {
    return undefined;
  }
};
