import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CamerasProcess } from '../../types/state';
import { getCameraByIdAction, fetchCamerasAction, fetchPromoCamerasAction, getSimilarCamerasByIdAction } from '../api-actions';
import { CameraData } from '../../types/cameras';

const initialState: CamerasProcess = {
  cameras: [],
  sortedCameras: [],
  promoCameras: [],
  similarCameras: [],
  currentCamera: null,

  isCamerasLoading: false,
  isPromoCamerasLoading: false,
  isSimilarCamerasLoading: false,
  isCurrentCameraLoading: false,
};

export const camerasProcess = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {
    resetCurrentCamera: (state) => {
      state.currentCamera = null;
    },
    resetSimilarCameras: (state) => {
      state.similarCameras = [];
    },
    updateSortedCameras: (state, action: PayloadAction<CameraData[]>) => {
      state.sortedCameras = action.payload;
    }
  },
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

      .addCase(getSimilarCamerasByIdAction.pending, (state) => {
        state.isSimilarCamerasLoading = true;
      })
      .addCase(getSimilarCamerasByIdAction.fulfilled,(state, action) => {
        state.similarCameras = action.payload;
        state.isSimilarCamerasLoading = false;
      })
      .addCase(getSimilarCamerasByIdAction.rejected, (state) => {
        state.isSimilarCamerasLoading = false;
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

export const {resetCurrentCamera, resetSimilarCameras, updateSortedCameras} = camerasProcess.actions;
