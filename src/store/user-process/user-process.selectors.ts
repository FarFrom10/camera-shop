import { NameSpace } from '../../const';
import { StateUser } from '../../types/state';

export const selectIsContactMeDataLoading = (state: StateUser): boolean => state[NameSpace.User].isContactMeDataLoading;
