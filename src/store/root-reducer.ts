import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { camerasProcess } from './cameras-process/cameras-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
