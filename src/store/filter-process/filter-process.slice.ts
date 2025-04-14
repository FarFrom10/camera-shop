import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterCategory, NameSpace, } from '../../const';
import { FilterProcess } from '../../types/state';
import { FilterCameraType, FilterLevel } from '../../types/types';

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
    changeCameraType: (state, action: PayloadAction<FilterCameraType>) => {
      state.cameraType = action.payload;
    },
    changeLevel: (state, action: PayloadAction<FilterLevel>) => {
      state.level = action.payload;
    },
    resetFilters: () => initialState,
    resetUnavailableTypesForVideo: (state) => {
      state.cameraType.film = false;
      state.cameraType.snapshot = false;
    }
  },
});

export const {
  changeCategory,
  changeCameraType,
  changeLevel,
  resetFilters,
  resetUnavailableTypesForVideo
} = filterProcess.actions;

