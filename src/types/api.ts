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

export type ReviewData = {
  cameraId: number;
  rating: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
}
