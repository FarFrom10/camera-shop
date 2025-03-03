import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CamerasProcess } from '../../types/state';
import { fetchCamerasAction } from '../api-actions';

const initialState: CamerasProcess = {
  cameras: [],
  fullCamera: null,

  isCamerasLoading: false,
  isFullCameraLoading: false,
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
      });
  },
});
