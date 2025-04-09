import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterCategory, NameSpace, } from '../../const';
import { FilterProcess } from '../../types/state';

const initialState: FilterProcess = {
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
  }
};

export const filterProcess = createSlice({
  name: NameSpace.Filter,
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<FilterCategory | null>) => {
      state.category = action.payload;
    },
    resetFilters: () => initialState
  },
});

export const {changeCategory, resetFilters} = filterProcess.actions;
