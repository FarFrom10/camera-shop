import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { camerasProcess } from './cameras-process/cameras-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { sortProcess } from './sort-process/sort-process.slice';
import { filterProcess } from './filter-process/filter-process.slice';
import { basketProcess } from './basket-process/basket-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Sort]: sortProcess.reducer,
  [NameSpace.Filter]: filterProcess.reducer,
  [NameSpace.Basket]: basketProcess.reducer,
});
