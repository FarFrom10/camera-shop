import { NameSpace } from '../../const';
import { BasketCameraData } from '../../types/cameras';
import { StateBasket } from '../../types/state';

export const selectAddedCameras = (state: StateBasket): BasketCameraData[] => state[NameSpace.Basket].addedCameras;
