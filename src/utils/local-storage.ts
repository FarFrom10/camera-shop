import { BasketItemData } from '../types/cameras';
import { PromoCode } from '../types/types';

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

export const getLocalStorageCouponData = (): PromoCode | null => {
  try {
    const data = localStorage.getItem('coupon');
    if (!data) {
      return null;
    }
    return JSON.parse(data) as PromoCode;
  } catch (err) {
    return null;
  }
};

export const saveLocalStorageCouponData = (couponData: PromoCode): void => {
  try {
    localStorage.setItem('coupon', JSON.stringify(couponData));
  } catch (err) {
    return undefined;
  }
};
