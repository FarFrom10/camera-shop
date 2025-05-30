import { BasketItemData, PromoCameraData } from '../types/cameras';
import { PriceRange } from '../types/types';

export function convertPrice(price: number): string{
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
}

export const getOnlyNumbersFromString = (value: string): string => value.replace(/[^\d]/g, '');

export function getMinPrice(
  {
    currentMinPrice,
    currentMaxPrice,
    minPrice,
    maxPrice,
  } : PriceRange
): string{
  if (currentMinPrice < minPrice) {
    return String(minPrice);
  }
  if (currentMinPrice > maxPrice) {
    return String(maxPrice);
  }
  if (currentMaxPrice && currentMinPrice > currentMaxPrice) {
    return String(currentMaxPrice);
  }

  return String(currentMinPrice);
}

export function getMaxPrice({
  currentMinPrice,
  currentMaxPrice,
  minPrice,
  maxPrice,
} : PriceRange
): string{
  if (currentMaxPrice > maxPrice) {
    return String(maxPrice);
  }
  if (currentMaxPrice < minPrice && currentMinPrice >= minPrice) {
    return String(currentMinPrice);
  }
  if (currentMaxPrice < minPrice) {
    return String(minPrice);
  }
  if (currentMinPrice && currentMaxPrice < currentMinPrice) {
    return String(currentMinPrice);
  }

  return String(currentMaxPrice);
}

export const getTotalBasketItemsAmount = (basketItems: BasketItemData[]) =>
  basketItems.reduce((sum, item) => sum + item.amount, 0);

//Убираем промо товары из массива
export const filterCamerasByPromo = (basketItems: BasketItemData[], promo: PromoCameraData[]) => {
  const promoIds = promo.map((camera) => camera.id);
  return basketItems.filter((camera) => !promoIds.includes(camera.id));
};


export const getTotalBasketPrice = (basketItems: BasketItemData[]) =>
  basketItems.reduce((sum, item) => sum + item.price * item.amount, 0);

export const getThrottleMessage = (delay: number): string => {
  const seconds = String(delay).split('').at(0) || delay;
  return `Действие возможно раз в ${seconds} секунд(ы)`;
};
