import { BasketItemData, CameraData } from '../types/cameras';

export function getMinAndMaxPricesFromCameras(cameras: CameraData[]): {min: number; max: number} {
  const minValue = !cameras.length
    ? {price: 0}
    : cameras.reduce((prev, current) => (prev && prev.price < current.price) ? prev : current);
  const maxValue = !cameras.length
    ? {price: 0}
    : cameras.reduce((prev, current) => (prev && prev.price > current.price) ? prev : current);

  return {
    min: minValue.price,
    max: maxValue.price,
  };
}

export const getBasketCamerasIds = (cameras: BasketItemData[]): number[] => cameras.map((camera) => camera.id);
