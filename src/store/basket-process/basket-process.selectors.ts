import { NameSpace } from '../../const';
import { BasketItemsData } from '../../types/cameras';
import { StateBasket } from '../../types/state';

export const selectBasketItems = (state: StateBasket): BasketItemsData[] => state[NameSpace.Basket].basketItems;

export const selectIsBasketLoading = (state: StateBasket): boolean => state[NameSpace.Basket].isBasketLoading;
