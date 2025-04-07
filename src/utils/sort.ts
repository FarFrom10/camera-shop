import { SortByOrder, SortByType } from '../const';
import { CameraData } from '../types/cameras';

function sortByPrice(cameras: CameraData[], order: SortByOrder){
  switch(order) {
    case SortByOrder.Up:
      return cameras.sort((cameraA, cameraB) => cameraA.price - cameraB.price);
    case SortByOrder.Down:
      return cameras.sort((cameraA, cameraB) => cameraB.price - cameraA.price);
  }
}

function sortByPopularity(cameras: CameraData[], order: SortByOrder){
  switch(order) {
    case SortByOrder.Up:
      return cameras.sort((cameraA, cameraB) => cameraA.reviewCount - cameraB.reviewCount);
    case SortByOrder.Down:
      return cameras.sort((cameraA, cameraB) => cameraB.reviewCount - cameraA.reviewCount);
  }
}

export function sortCamerasByType(cameras: CameraData[], sortType: SortByType, sortOrder: SortByOrder): CameraData[] {
  switch(sortType) {
    case SortByType.Price:
      return sortByPrice(cameras, sortOrder);
    case SortByType.Popular:
      return sortByPopularity(cameras, sortOrder);
  }
}
