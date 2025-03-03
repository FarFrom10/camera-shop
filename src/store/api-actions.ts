import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkArguments } from '../types/api';
import { CamerasData } from '../types/cameras';
import { APIRoute, NameSpace } from '../const';

export const fetchCamerasAction = createAsyncThunk<CamerasData[], undefined, AsyncThunkArguments>(
  `${NameSpace.Cameras}/fetchProducts`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<CamerasData[]>(APIRoute.Cameras);
    return data;
  }
);
