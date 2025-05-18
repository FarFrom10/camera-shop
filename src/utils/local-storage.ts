import { BasketItemsData } from '../types/cameras';

export const loadBasketItemsState = (): BasketItemsData[] => {
  try {
    const data = localStorage.getItem('basket');
    if (!data) {
      return [];
    }
    return JSON.parse(data) as BasketItemsData[];
  } catch (err) {
    return [];
  }
};

export const saveBasketItemsState = (basketData: BasketItemsData[]): void => {
  try {
    localStorage.setItem('basket', JSON.stringify(basketData));
  } catch (err) {
    return undefined;
  }
};
