import { DiscountByAmount, DiscountReductionByCost } from '../const';
import { BasketItemsData } from '../types/cameras';
import { getTotalBasketItemsAmount } from './common';

function getDiscountByAmount(basketItems: BasketItemsData[]): number {
  const itemsAmount = getTotalBasketItemsAmount(basketItems);
  if (itemsAmount <= 1) {
    return 0;
  }

  if (itemsAmount === 2) {
    return DiscountByAmount.low;
  }
  if (itemsAmount > 2 && itemsAmount < 6) {
    return DiscountByAmount.medium;
  }
  if (itemsAmount > 5 && itemsAmount < 11) {
    return DiscountByAmount.high;
  }

  return DiscountByAmount.max;
}

function getDiscountReducedByPrice(basketItems: BasketItemsData[], totalPrice: number): number {
  const discountByAmount = getDiscountByAmount(basketItems);
  if (discountByAmount === 0) {
    return 0;
  }

  if (totalPrice < 10000) {
    return discountByAmount;
  }
  if (totalPrice >= 10000 && totalPrice < 20000) {
    return discountByAmount - DiscountReductionByCost.low;
  }
  if (totalPrice >= 20000 && totalPrice < 30000) {
    return discountByAmount - DiscountReductionByCost.medium;
  }

  return discountByAmount - DiscountReductionByCost.high;
}

export function getDiscountedTotalPrice(basketItems: BasketItemsData[], totalBasketPrice: number): number {
  const discount = getDiscountReducedByPrice(basketItems, totalBasketPrice);
  if (discount === 0) {
    return totalBasketPrice;
  }

  return Math.round(totalBasketPrice * Number(`0.${100 - discount}`));
}

