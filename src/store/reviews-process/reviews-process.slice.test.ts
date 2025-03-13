import { mockReviews } from '../../mocks/mock-test';
import { fetchCameraReviewsByIdAction } from '../api-actions';
import { reviewsProcess } from './reviews-process.slice';

describe('ReviewProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews:mockReviews,

      isReviewsLoading: false,
    };

    const result = reviewsProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: [],

      isReviewsLoading: false,
    };

    const result = reviewsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsLoading" to "true" with "fetchCameraReviewsByIdAction.pending" action', () => {
    const expectedState = {
      reviews:[],

      isReviewsLoading: true,
    };

    const result = reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "reviews" and set "isReviewsLoading" to "false" with "fetchCameraReviewsByIdAction.fulfilled" action', () => {
    const expectedState = {
      reviews: mockReviews,

      isReviewsLoading: false,
    };
    const fakeId = String(mockReviews[0].cameraId);

    const result = reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.fulfilled(mockReviews, '', fakeId));

    expect(result).toEqual(expectedState);
  });
  it('should set "isReviewsLoading" to "false" with "fetchCameraReviewsByIdAction.rejected" action', () => {
    const expectedState = {
      reviews: [],

      isReviewsLoading: false,
    };

    const result = reviewsProcess.reducer(undefined, fetchCameraReviewsByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
