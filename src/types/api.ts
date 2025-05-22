import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './state';

export type AsyncThunkArguments = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export type OrderData = {
  camerasIds: number[];
  coupon: string | null;
}
