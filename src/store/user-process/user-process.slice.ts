import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { postContactMeDataAction } from '../api-actions';

export const initialState: UserProcess = {
  isContactMeDataLoading: false
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postContactMeDataAction.pending, (state) => {
        state.isContactMeDataLoading = true;
      })
      .addCase(postContactMeDataAction.fulfilled,(state) => {
        state.isContactMeDataLoading = false;
      })
      .addCase(postContactMeDataAction.rejected, (state) => {
        state.isContactMeDataLoading = false;
      });
  },
});
