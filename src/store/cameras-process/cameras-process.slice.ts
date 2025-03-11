import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CamerasProcess } from '../../types/state';
import { getCameraByIdAction, fetchCamerasAction, fetchPromoCamerasAction } from '../api-actions';

const initialState: CamerasProcess = {
  cameras: [],
  promoCameras: [],
  currentCamera: null,

  isCamerasLoading: false,
  isPromoCamerasLoading: false,
  isCurrentCameraLoading: false,
};

export const camersProcess = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isCamerasLoading = true;
      })
      .addCase(fetchCamerasAction.fulfilled,(state, action) => {
        state.cameras = action.payload;
        state.isCamerasLoading = false;
      })
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.isCamerasLoading = false;
      })

      .addCase(fetchPromoCamerasAction.pending, (state) => {
        state.isPromoCamerasLoading = true;
      })
      .addCase(fetchPromoCamerasAction.fulfilled,(state, action) => {
        state.promoCameras = action.payload;
        state.isPromoCamerasLoading = false;
      })
      .addCase(fetchPromoCamerasAction.rejected, (state) => {
        state.isPromoCamerasLoading = false;
      })

      .addCase(getCameraByIdAction.pending, (state) => {
        state.isCurrentCameraLoading = true;
      })
      .addCase(getCameraByIdAction.fulfilled,(state, action) => {
        state.currentCamera = action.payload;
        state.isCurrentCameraLoading = false;
      })
      .addCase(getCameraByIdAction.rejected, (state) => {
        state.isCurrentCameraLoading = false;
      });
  },
});
