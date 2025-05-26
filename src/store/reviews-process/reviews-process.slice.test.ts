import { fakeReviews } from '../../mocks/mock-test';
import { fetchCameraReviewsByIdAction, postReviewDataAction } from '../api-actions';
import { resetReviews, reviewsProcess } from './reviews-process.slice';

describe('ReviewProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews:fakeReviews,

      isReviewsLoading: false,
      isPostReviewLoading: false,
    };

    const result = reviewsProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],

      isReviewsLoading: false,
      isPostReviewLoading: false,
    };

    const result = reviewsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsLoading" to "true" with "fetchCameraReviewsByIdAction.pending" action', () => {
    const expectedState = {
      reviews:[],

      isReviewsLoading: true,
      isPostReviewLoading: false,
    };

    const result = reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "reviews" and set "isReviewsLoading" to "false" with "fetchCameraReviewsByIdAction.fulfilled" action', () => {
    const expectedState = {
      reviews: fakeReviews,

      isReviewsLoading: false,
      isPostReviewLoading: false,
    };
    const fakeId = String(fakeReviews[0].cameraId);

    const result = reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.fulfilled(fakeReviews, '', fakeId));

    expect(result).toEqual(expectedState);
  });
  it('should reset "reviews" after get data and dispatch "resetReviews"', () => {
    const expectedState = {
      reviews: [],

      isReviewsLoading: false,
      isPostReviewLoading: false,
    };
    const fakeId = String(fakeReviews[0].cameraId);

    reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.fulfilled(fakeReviews, '', fakeId));
    const result = reviewsProcess.reducer(undefined, resetReviews);

    expect(result).toEqual(expectedState);
  });
  it('should set "isReviewsLoading" to "false" with "fetchCameraReviewsByIdAction.rejected" action', () => {
    const expectedState = {
      reviews: [],

      isReviewsLoading: false,
      isPostReviewLoading: false,
    };

    const result = reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isPostReviewLoading" to "true" with "postReviewDataAction.pending" action', () => {
    const expectedState = {
      reviews:[],

      isReviewsLoading: false,
      isPostReviewLoading: true,
    };

    const result = reviewsProcess.reducer(undefined, postReviewDataAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isPostReviewLoading" to "false" with "postReviewDataAction.rejected" action', () => {
    const expectedState = {
      reviews:[],

      isReviewsLoading: false,
      isPostReviewLoading: false,
    };

    const result = reviewsProcess.reducer(undefined, postReviewDataAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
