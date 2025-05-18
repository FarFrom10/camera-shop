import { NameSpace } from '../../const';
import { BasketItemData } from '../../types/cameras';
import { StateBasket } from '../../types/state';

export const selectBasketItems = (state: StateBasket): BasketItemData[] => state[NameSpace.Basket].basketItems;

export const selectIsBasketLoading = (state: StateBasket): boolean => state[NameSpace.Basket].isBasketLoading;
