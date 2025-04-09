import { FilterCategory, NameSpace } from '../../const';
import { StateFilter } from '../../types/state';
import { FilterCameraType, FilterLevel, FilterPrice } from '../../types/types';

export const selectFilterPrice = (state: StateFilter): FilterPrice => state[NameSpace.Filter].price;
export const selectFilterCategory = (state: StateFilter): FilterCategory | null => state[NameSpace.Filter].category;
export const selectFilterCameraType = (state: StateFilter): FilterCameraType => state[NameSpace.Filter].cameraType;
export const selectFilterLevel = (state: StateFilter): FilterLevel => state[NameSpace.Filter].level;
