import { NameSpace } from '../../const';
import { BasketItemData } from '../../types/cameras';
import { StateBasket } from '../../types/state';
import { PromoCode } from '../../types/types';

export const selectBasketItems = (state: StateBasket): BasketItemData[] => state[NameSpace.Basket].basketItems;
export const selectPromoCode = (state: StateBasket): PromoCode => state[NameSpace.Basket].promoCode;

export const selectIsBasketLoading = (state: StateBasket): boolean => state[NameSpace.Basket].isBasketLoading;
export const selectIsPromoCodeLoading = (state: StateBasket): boolean => state[NameSpace.Basket].isPromoCodeLoading;
