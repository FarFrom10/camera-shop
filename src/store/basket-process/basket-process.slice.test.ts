import { fakeOrderData } from '../../mocks/mock-test';
import { postOrderDataAction } from '../api-actions';
import { basketProcess } from './basket-process.slice';

describe('BasketProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      basketItems: [],

      isBasketLoading: false
    };

    const result = basketProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      basketItems: [],

      isBasketLoading: false
    };

    const result = basketProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isBasketLoading" to "true" with "postOrderDataAction.pending" action', () => {
    const expectedState = {
      basketItems: [],

      isBasketLoading: true
    };

    const result = basketProcess.reducer(undefined, postOrderDataAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should set "isBasketLoading" to "false" with "postOrderDataAction.fulfilled" action', () => {
    const expectedState = {
      basketItems: [],

      isBasketLoading: false
    };

    const result = basketProcess.reducer(undefined, postOrderDataAction.fulfilled('', '', fakeOrderData));

    expect(result).toEqual(expectedState);
  });
  it('should set "isBasketLoading" to "false" with "postOrderDataAction.rejected" action', () => {
    const expectedState = {
      basketItems: [],

      isBasketLoading: false
    };

    const result = basketProcess.reducer(undefined, postOrderDataAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
