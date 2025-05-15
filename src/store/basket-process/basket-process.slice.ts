import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BasketProcess } from '../../types/state';
import { CameraData, ChangedCameraAmountData } from '../../types/cameras';

export const initialState: BasketProcess = {
  basketItems: []
};

export const basketProcess = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addCamera: (state, action: PayloadAction<CameraData>) => {
      const camera = action.payload;
      const cameraIndex = state.basketItems.findIndex((item) => item.id === camera.id);
      const updatedCameras = cameraIndex !== -1
        ? state.basketItems.map((item, index) => index === cameraIndex ? {...item, amount: item.amount + 1} : item)
        : [...state.basketItems, {...camera, amount: 1}];

      state.basketItems = updatedCameras;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.basketItems = state.basketItems.filter((camera) => camera.id !== action.payload);
    },
    changeAmount: (state, action: PayloadAction<ChangedCameraAmountData>) => {
      const {id, amount} = action.payload;
      const updatedCameras =
      state.basketItems.map((item) => item.id === id
        ? {...item, amount: amount}
        : item
      );

      state.basketItems = updatedCameras;
    },
  },
});

export const {addCamera, removeProduct, changeAmount } = basketProcess.actions;
