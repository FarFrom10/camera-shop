import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkArguments, OrderData, ReviewData } from '../types/api';
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

export const getSimilarCamerasByIdAction = createAsyncThunk<CameraData[], string, AsyncThunkArguments>(
  `${NameSpace.Cameras}/fetchSimilarCamerasById`,
  async(id, {extra: api}) => {
    const {data} = await api.get<CameraData[]>(`${APIRoute.Cameras}/${id}/similar`);
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

export const postOrderDataAction = createAsyncThunk<string, OrderData, AsyncThunkArguments>(
  `${NameSpace.Basket}/postOrderData`,
  async(orderData, {extra: api}) => {
    const {data} = await api.post<string>(APIRoute.Orders, orderData);
    return data;
  }
);

export const postReviewDataAction = createAsyncThunk<CameraReview, ReviewData, AsyncThunkArguments>(
  `${NameSpace.Reviews}/postReviewData`,
  async(reviewData, {extra: api}) => {
    const {data} = await api.post<CameraReview>(APIRoute.Reviews, reviewData);
    return data;
  }
);
