import { NameSpace } from '../const';
import { store } from '../store';
import { CameraData, CameraReview, PromoCameraData } from './cameras';

export type State = ReturnType<typeof store.getState>;
export type StateCameras = Pick<State, NameSpace.Cameras>
export type StateReviews = Pick<State, NameSpace.Reviews>
export type StateUser = Pick<State, NameSpace.User>

export type AppDispatch = typeof store.dispatch;

export type CamerasProcess = {
  cameras: CameraData[];
  promoCameras: PromoCameraData[];
  similarCameras: CameraData[];
  currentCamera: CameraData | null;

  isCamerasLoading: boolean;
  isPromoCamerasLoading: boolean;
  isSimilarCamerasLoading: boolean;
  isCurrentCameraLoading: boolean;
}

export type ReviewsProcess = {
  reviews: CameraReview[];

  isReviewsLoading: boolean;
}

export type UserProcess = {
  isContactMeDataLoading: boolean;
}
