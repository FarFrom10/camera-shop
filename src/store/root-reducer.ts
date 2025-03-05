import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { camersProcess } from './cameras-process/cameras-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camersProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
});
