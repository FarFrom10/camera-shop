import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkArguments } from '../types/api';
import { CameraData, PromoCameraData } from '../types/cameras';
import { APIRoute, NameSpace } from '../const';

export const fetchCamerasAction = createAsyncThunk<CameraData[], undefined, AsyncThunkArguments>(
  `${NameSpace.Cameras}/fetchCameras`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<CameraData[]>(APIRoute.Cameras);
    return data;
  }
);

export const fetchPromoCamerasAction = createAsyncThunk<PromoCameraData[], undefined, AsyncThunkArguments>(
  `${NameSpace.Cameras}/fetchPromoCameras`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<PromoCameraData[]>(APIRoute.PromoCameras);
    return data;
  }
);

export const fetchCameraByIdAction = createAsyncThunk<CameraData, string, AsyncThunkArguments>(
  `${NameSpace.Cameras}/fetchCameraById`,
  async(id, {extra: api}) => {
    const {data} = await api.get<CameraData>(`${APIRoute.Cameras}/${id}`);
    return data;
  }
);
