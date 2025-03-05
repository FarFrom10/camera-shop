import { NameSpace } from '../../const';
import { CameraReview } from '../../types/cameras';
import { StateReviews } from '../../types/state';

export const selectReviews = (state: StateReviews): CameraReview[] => state[NameSpace.Reviews].reviews;

export const selectIsReviewsLoading = (state: StateReviews): boolean => state[NameSpace.Reviews].isReviewsLoading;
