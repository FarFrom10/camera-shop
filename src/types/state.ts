import { FilterCategory, NameSpace, SortByOrder, SortByType } from '../const';
import { store } from '../store';
import { BasketItemsData, CameraData, CameraReview, PromoCameraData } from './cameras';
import { FilterCameraType, FilterLevel, FilterPrice } from './types';

export type State = ReturnType<typeof store.getState>;
export type StateCameras = Pick<State, NameSpace.Cameras>
export type StateReviews = Pick<State, NameSpace.Reviews>
export type StateUser = Pick<State, NameSpace.User>
export type StateSort = Pick<State, NameSpace.Sort>
export type StateFilter = Pick<State, NameSpace.Filter>
export type StateBasket = Pick<State, NameSpace.Basket>
export type StateWholeFilter = State[NameSpace.Filter]

export type AppDispatch = typeof store.dispatch;

export type CamerasProcess = {
  cameras: CameraData[];
  sortedCameras: CameraData[];
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

export type SortProcess = {
  sortType: SortByType;
  sortOrder: SortByOrder;
}

export type FilterProcess = {
  price: FilterPrice;
  category: FilterCategory | null;
  cameraType: FilterCameraType;
  level: FilterLevel;
  catalogCurrentPage: number;
}

export type BasketProcess = {
  basketItems: BasketItemsData[];
}
