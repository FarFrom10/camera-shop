import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortByOrder, SortByType } from '../../const';
import { SortProcess } from '../../types/state';

export const initialState: SortProcess = {
  sortType: SortByType.Price,
  sortOrder: SortByOrder.Up,
};

export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<SortByType>) => {
      state.sortType = action.payload;
    },
    changeSortOrder: (state, action: PayloadAction<SortByOrder>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {changeSortType, changeSortOrder} = sortProcess.actions;
