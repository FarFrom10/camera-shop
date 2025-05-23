import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchCameraReviewsByIdAction, postReviewDataAction } from '../api-actions';

export const initialState: ReviewsProcess = {
  reviews: [],

  isReviewsLoading: false,
  isPostReviewLoading: false
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    resetReviews: (state) => {
      state.reviews = [];
    },
  },
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
      })

      .addCase(postReviewDataAction.pending, (state) => {
        state.isPostReviewLoading = true;
      })
      .addCase(postReviewDataAction.fulfilled,(state, action) => {
        state.reviews = [...state.reviews, action.payload];
        state.isPostReviewLoading = false;
      })
      .addCase(postReviewDataAction.rejected, (state) => {
        state.isPostReviewLoading = false;
      });
  },
});

export const {resetReviews} = reviewsProcess.actions;
