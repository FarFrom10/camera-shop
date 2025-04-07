import { NameSpace, SortByOrder, SortByType } from '../../const';
import { StateSort } from '../../types/state';

export const selectSortType = (state: StateSort): SortByType => state[NameSpace.Sort].sortType;
export const selectSortOrder = (state: StateSort): SortByOrder => state[NameSpace.Sort].sortOrder;
