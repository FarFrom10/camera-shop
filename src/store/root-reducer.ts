import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { camersProcess } from './cameras-process/cameras-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camersProcess.reducer,
});
