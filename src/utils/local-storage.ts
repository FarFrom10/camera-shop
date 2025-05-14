import { BasketProcess } from '../types/state';

export const loadBasketState = (): Partial<BasketProcess> | undefined => {
  try {
    const data = localStorage.getItem('basket');
    if (!data) {
      return undefined;
    }
    return JSON.parse(data) as Partial<BasketProcess>;
  } catch (err) {
    return undefined;
  }
};

export const saveBasketState = (basketData: Partial<BasketProcess>): void => {
  try {
    localStorage.setItem('basket', JSON.stringify(basketData));
  } catch (err) {
    return undefined;
  }
};
