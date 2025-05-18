import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';
import { loadBasketItemsState, saveBasketItemsState } from '../utils/local-storage';
import { NameSpace } from '../const';
import { initialState as camerasInitial } from './cameras-process/cameras-process.slice';
import { initialState as reviewsInitial } from './reviews-process/reviews-process.slice';
import { initialState as userInitial } from './user-process/user-process.slice';
import { initialState as sortInitial } from './sort-process/sort-process.slice';
import { initialState as filterInitial } from './filter-process/filter-process.slice';
import { initialState as basketInitial } from './basket-process/basket-process.slice';

//Начальные состояния всех слайсов для использования preloadedState
const initialStates = {
  [NameSpace.Cameras]: camerasInitial,
  [NameSpace.Reviews]: reviewsInitial,
  [NameSpace.User]: userInitial,
  [NameSpace.Sort]: sortInitial,
  [NameSpace.Filter]: filterInitial,
  [NameSpace.Basket]: basketInitial,
};

//Забираю данные корзины из localStorage
const loadedBasketItems = loadBasketItemsState() ?? initialStates[NameSpace.Basket];

const preloadedState = {
  ...initialStates,
  [NameSpace.Basket]: {
    ...basketInitial,
    basketItems: loadedBasketItems,
  },
};

export const api = createAPI();
export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
});

store.subscribe(() => {
  const state = store.getState();

  saveBasketItemsState(state.basket.basketItems);
});
