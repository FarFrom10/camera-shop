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
  },
  catalogCurrentPage: 1
};

export const filterProcess = createSlice({
  name: NameSpace.Filter,
  initialState,
  reducers: {
    changeMinPrice: (state, action: PayloadAction<string>) => {
      state.price.min = action.payload;
      state.catalogCurrentPage = 1;
    },
    changeMaxPrice: (state, action: PayloadAction<string>) => {
      state.price.max = action.payload;
      state.catalogCurrentPage = 1;
    },
    changeCategory: (state, action: PayloadAction<FilterCategory | null>) => {
      state.category = action.payload;
      state.catalogCurrentPage = 1;
    },
    changeCameraType: (state, action: PayloadAction<FilterCameraType>) => {
      state.cameraType = action.payload;
      state.catalogCurrentPage = 1;
    },
    changeLevel: (state, action: PayloadAction<FilterLevel>) => {
      state.level = action.payload;
      state.catalogCurrentPage = 1;
    },
    changeCatalogCurrentPage: (state, action: PayloadAction<number>) => {
      state.catalogCurrentPage = action.payload;
    },
    resetFilters: () => initialState,
    resetUnavailableTypesForVideo: (state) => {
      state.cameraType.film = false;
      state.cameraType.snapshot = false;
    }
  },
});

export const {
  changeMinPrice,
  changeMaxPrice,
  changeCategory,
  changeCameraType,
  changeLevel,
  changeCatalogCurrentPage,
  resetFilters,
  resetUnavailableTypesForVideo
} = filterProcess.actions;

