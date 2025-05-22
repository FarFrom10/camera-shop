import { BasketItemData } from '../types/cameras';
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

export const getTotalBasketPrice = (basketItems: BasketItemData[]) =>
  basketItems.reduce((sum, item) => sum + item.price * item.amount, 0);
