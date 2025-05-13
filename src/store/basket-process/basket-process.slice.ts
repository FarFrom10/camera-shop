import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BasketProcess } from '../../types/state';
import { CameraData, ChangedCameraAmountData } from '../../types/cameras';

const initialState: BasketProcess = {
  addedCameras: []
};

export const basketProcess = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addCamera: (state, action: PayloadAction<CameraData>) => {
      const camera = action.payload;
      const cameraIndex = state.addedCameras.findIndex((item) => item.vendorCode === camera.vendorCode);
      const updatedCameras = cameraIndex !== -1
        ? state.addedCameras.map((item, index) => index === cameraIndex ? {...item, amount: item.amount + 1} : item)
        : [...state.addedCameras, {...camera, amount: 1}];

      state.addedCameras = updatedCameras;
    },
    removeCamera: (state, action: PayloadAction<string>) => {
      state.addedCameras = state.addedCameras.filter((camera) => camera.vendorCode !== action.payload);
    },
    changeAmount: (state, action: PayloadAction<ChangedCameraAmountData>) => {
      const {vendorCode, amount} = action.payload;
      const updatedCameras =
      state.addedCameras.map((item) => item.vendorCode === vendorCode
        ? {...item, amount: amount}
        : item
      );

      state.addedCameras = updatedCameras;
    },
  },
});

export const {addCamera, removeCamera, changeAmount } = basketProcess.actions;
