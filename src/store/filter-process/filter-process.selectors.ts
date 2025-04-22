import { FilterCategory, NameSpace } from '../../const';
import { StateFilter, StateWholeFilter } from '../../types/state';
import { FilterCameraType, FilterLevel } from '../../types/types';

export const selectFilterState = (state: StateFilter): StateWholeFilter => state[NameSpace.Filter];

export const selectFilterCategory = (state: StateFilter): FilterCategory | null => state[NameSpace.Filter].category;
export const selectFilterCameraType = (state: StateFilter): FilterCameraType => state[NameSpace.Filter].cameraType;
export const selectFilterLevel = (state: StateFilter): FilterLevel => state[NameSpace.Filter].level;
export const selectCatalogCurrentPage = (state: StateFilter): number => state[NameSpace.Filter].catalogCurrentPage;
