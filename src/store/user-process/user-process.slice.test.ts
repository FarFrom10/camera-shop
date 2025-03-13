import { mockContactMeData } from '../../mocks/mock-test';
import { postContactMeDataAction } from '../api-actions';
import { userProcess } from './user-process.slice';

describe('UserProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isContactMeDataLoading: false
    };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      isContactMeDataLoading: false
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isContactMeDataLoading" to "true" with "postContactMeDataAction.pending" action', () => {
    const expectedState = {
      isContactMeDataLoading: true
    };

    const result = userProcess.reducer(undefined, postContactMeDataAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should set "isContactMeDataLoading" to "false" with "postContactMeDataAction.fulfilled" action', () => {
    const expectedState = {
      isContactMeDataLoading: false
    };

    const result = userProcess.reducer(undefined, postContactMeDataAction.fulfilled('', '', mockContactMeData));

    expect(result).toEqual(expectedState);
  });
  it('should set "isContactMeDataLoading" to "false" with "postContactMeDataAction.rejected" action', () => {
    const expectedState = {
      isContactMeDataLoading: false
    };


    const result = userProcess.reducer(undefined, postContactMeDataAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
