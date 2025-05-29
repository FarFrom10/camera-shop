import { SortByOrder, SortByType } from '../const';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras, fakeReviews } from '../mocks/mock-test';
import { State } from '../types/state';

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  cameras: {
    cameras: fakeCameras,
    sortedCameras: fakeCameras,
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
    isPostReviewLoading: false
  },
  sort: {
    sortType: SortByType.Price,
    sortOrder: SortByOrder.Up,
  },
  filter: {
    price: {
      min: '',
      max: ''
    },
    category: null,
    cameraType: {
      digital: false,
      film: false,
      snapshot: false,
      collection: false,
    },
    level: {
      zero: false,
      nonProfessional: false,
      professional: false,
    },
    catalogCurrentPage: 1
  },
  basket : {
    basketItems: [],
    promoCode: {
      coupon: '',
      discount: 0
    },

    isBasketLoading: false,
    isPromoCodeLoading: false,
  },
  ...initialState ?? {},
});
