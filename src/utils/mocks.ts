import { fakeCameras, fakeCurrentCamera, fakePromoCameras, fakeReviews } from '../mocks/mock-test';
import { State } from '../types/state';

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  cameras: {
    cameras: fakeCameras,
    promoCameras: fakePromoCameras,
    similarCameras: fakeCameras,
    currentCamera: fakeCurrentCamera,

    isCamerasLoading: false,
    isSimilarCamerasLoading: false,
    isPromoCamerasLoading: false,
    isCurrentCameraLoading: false,
  },
  reviews: {
    reviews: fakeReviews,

    isReviewsLoading: false,
  },
  user: {
    isContactMeDataLoading: false
  },
  ...initialState ?? {},
});
