import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkArguments, ContactMeData } from '../types/api';
import { CameraData, CameraReview, PromoCameraData } from '../types/cameras';
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

export const getCameraByIdAction = createAsyncThunk<CameraData, string, AsyncThunkArguments>(
  `${NameSpace.Cameras}/fetchCameraById`,
  async(id, {extra: api}) => {
    const {data} = await api.get<CameraData>(`${APIRoute.Cameras}/${id}`);
    return data;
  }
);

export const fetchCameraReviewsByIdAction = createAsyncThunk<CameraReview[], string, AsyncThunkArguments>(
  `${NameSpace.Reviews}/fetchCameraReviewsById`,
  async(id, {extra: api}) => {
    const {data} = await api.get<CameraReview[]>(`${APIRoute.Cameras}/${id}/reviews`);
    return data;
  }
);

export const postContactMeDataAction = createAsyncThunk<string, ContactMeData, AsyncThunkArguments>(
  `${NameSpace.User}/postContactMeData`,
  async({camerasIds, coupon, tel}, {extra: api}) => {
    const {data} = await api.post<string>(APIRoute.Oders, {camerasIds, coupon, tel});
    return data;
  }
);
