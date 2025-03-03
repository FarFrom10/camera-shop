import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './state';

export type AsyncThunkArguments = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
