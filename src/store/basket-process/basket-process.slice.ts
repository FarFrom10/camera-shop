import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BasketProcess } from '../../types/state';
import { CameraData, ChangedCameraAmountData } from '../../types/cameras';
import { postCouponAction, postOrderDataAction } from '../api-actions';

export const initialState: BasketProcess = {
  basketItems: [],
  promoCode: {
    coupon: null,
    discount: 0
  },

  isBasketLoading: false,
  isPromoCodeLoading: false,
};

export const basketProcess = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CameraData>) => {
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
    changePromoCode: (state, action: PayloadAction<string>) => {
      state.promoCode.coupon = action.payload;
    },
    resetPromoCode: (state) => {
      state.promoCode = {
        coupon: '',
        discount: 0
      };
    },

  },
  extraReducers(builder) {
    builder
      .addCase(postOrderDataAction.pending, (state) => {
        state.isBasketLoading = true;
      })
      .addCase(postOrderDataAction.fulfilled, (state) => {
        state.basketItems = [];
        state.promoCode = {
          coupon: null,
          discount: 0
        };
        state.isBasketLoading = false;
      })
      .addCase(postOrderDataAction.rejected, (state) => {
        state.isBasketLoading = false;
      })

      .addCase(postCouponAction.pending, (state) => {
        state.isPromoCodeLoading = true;
      })
      .addCase(postCouponAction.fulfilled, (state, action) => {
        state.promoCode.discount = action.payload;
        state.isPromoCodeLoading = false;
      })
      .addCase(postCouponAction.rejected, (state) => {
        state.isPromoCodeLoading = false;
      });
  }
});

export const {addProduct, removeProduct, changeAmount, changePromoCode, resetPromoCode } = basketProcess.actions;
