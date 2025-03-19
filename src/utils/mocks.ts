import { fakeCameras, fakeCurrentCamera, fakePromoCameras, fakeReviews } from '../mocks/mock-test';
import { State } from '../types/state';

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  cameras: {
    cameras: fakeCameras,
    promoCameras: fakePromoCameras,
    currentCamera: fakeCurrentCamera,

    isCamerasLoading: false,
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
