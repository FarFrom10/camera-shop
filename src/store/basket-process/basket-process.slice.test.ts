import { fakeCouponData, fakeCurrentCamera, fakeOrderData } from '../../mocks/mock-test';
import { postOrderDataAction } from '../api-actions';
import { addProduct, basketProcess, changePromoCode, removeProduct, resetPromoCode } from './basket-process.slice';

describe('BasketProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isBasketLoading" to "true" with "postOrderDataAction.pending" action', () => {
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: true,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(undefined, postOrderDataAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should set "isBasketLoading" to "false" with "postOrderDataAction.fulfilled" action', () => {
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(undefined, postOrderDataAction.fulfilled('', '', fakeOrderData));

    expect(result).toEqual(expectedState);
  });
  it('should set "isBasketLoading" to "false" with "postOrderDataAction.rejected" action', () => {
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(undefined, postOrderDataAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should add new product to "basketItems" with "addProduct" action', () => {
    const expectedState = {
      basketItems: [{...fakeCurrentCamera, amount: 1}],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(undefined, addProduct(fakeCurrentCamera));

    expect(result).toEqual(expectedState);
  });

  it('should remove product from "basketItems" with "removeProduct" action', () => {
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: null,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    basketProcess.reducer(undefined, addProduct(fakeCurrentCamera));
    const result = basketProcess.reducer(undefined, removeProduct(fakeCurrentCamera.id));

    expect(result).toEqual(expectedState);
  });

  it('should change "promoCode.coupon" with "changePromoCode" action', () => {
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: fakeCouponData.coupon,
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    const result = basketProcess.reducer(undefined, changePromoCode(fakeCouponData.coupon));

    expect(result).toEqual(expectedState);
  });

  it('should reset "promoCode" with "resetPromoCode" action', () => {
    const expectedState = {
      basketItems: [],
      promoCode: {
        coupon: '',
        discount: 0
      },

      isBasketLoading: false,
      isPromoCodeLoading: false,
    };

    basketProcess.reducer(undefined, changePromoCode(fakeCouponData.coupon));
    const result = basketProcess.reducer(undefined, resetPromoCode());

    expect(result).toEqual(expectedState);
  });
});
