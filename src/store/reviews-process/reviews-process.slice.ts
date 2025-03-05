import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchCameraReviewsByIdAction } from '../api-actions';

const initialState: ReviewsProcess = {
  reviews: [],

  isReviewsLoading: false,
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameraReviewsByIdAction.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchCameraReviewsByIdAction.fulfilled,(state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchCameraReviewsByIdAction.rejected, (state) => {
        state.isReviewsLoading = false;
      });
  },
});
