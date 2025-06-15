import { mergeWith } from 'lodash';
import { SortByOrder, SortByType } from '../const';
import { fakeCameras, fakeCurrentCamera, fakePromoCameras, fakeReviews } from '../mocks/mock-test';
import { State } from '../types/state';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export const makeFakeStore = (initialState?: DeepPartial<State>): State => {
  const defaultState: State = {
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
    }
  };

  return mergeWith(
    {},
    defaultState,
    initialState ?? {},
    (_: unknown, srcValue: unknown) => {
      //Нужно для тех случаев, когда передается пустой массив. Иначе стейт не обновляется
      if (Array.isArray(srcValue)) {
        return srcValue as unknown;
      }

      return undefined;
    }
  );
};
