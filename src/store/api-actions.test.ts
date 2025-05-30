import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import { AppThunkDispatch, extractActionsTypes } from '../types/mocks';
import { APIRoute } from '../const';
import { fetchCameraReviewsByIdAction, fetchCamerasAction, fetchPromoCamerasAction, getCameraByIdAction, getSimilarCamerasByIdAction, postCouponAction, postOrderDataAction, postReviewDataAction } from './api-actions';
import { fakeCameras, fakeCouponData, fakeCurrentCamera, fakeOrderData, fakePromoCameras, fakeReviewData, fakeReviews } from '../mocks/mock-test';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ cameras: {cameras: []}});
  });

  describe('fetchCamerasAction', () => {
    it('should dispatch "fetchCamerasAction.pending" and "fetchCamerasAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Cameras).reply(200, fakeCameras);

      await store.dispatch(fetchCamerasAction());
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const fetchCamerasActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCamerasAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.fulfilled.type
      ]);

      expect(fetchCamerasActionFulfilled.payload)
        .toEqual(fakeCameras);
    });

    it('should dispatch "fetchCamerasAction.pending" and "fetchCamerasAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Cameras).reply(400);

      await store.dispatch(fetchCamerasAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.rejected.type
      ]);
    });
  });

  describe('fetchPromoCamerasAction', () => {
    it('should dispatch "fetchPromoCamerasAction.pending" and "fetchPromoCamerasAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.PromoCameras).reply(200, fakePromoCameras);

      await store.dispatch(fetchPromoCamerasAction());
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const fetchPromoCamerasActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchPromoCamerasAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        fetchPromoCamerasAction.pending.type,
        fetchPromoCamerasAction.fulfilled.type
      ]);

      expect(fetchPromoCamerasActionFulfilled.payload)
        .toEqual(fakePromoCameras);
    });

    it('should dispatch "fetchPromoCamerasAction.pending" and "fetchPromoCamerasAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.PromoCameras).reply(400);

      await store.dispatch(fetchPromoCamerasAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromoCamerasAction.pending.type,
        fetchPromoCamerasAction.rejected.type
      ]);
    });
  });

  describe('getSimilarCamerasByIdAction', () => {
    it('should dispatch "getSimilarCamerasByIdAction.pending" and "getSimilarCamerasByIdAction.fulfilled" when server response 200', async () => {
      const fakeId = String(fakeCameras[0].id);
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${fakeId}/similar`).reply(200, fakeCameras);

      await store.dispatch(getSimilarCamerasByIdAction(fakeId));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const getSimilarCamerasByIdActionFulfilled = emittedActions.at(1) as ReturnType<typeof getSimilarCamerasByIdAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        getSimilarCamerasByIdAction.pending.type,
        getSimilarCamerasByIdAction.fulfilled.type
      ]);

      expect(getSimilarCamerasByIdActionFulfilled.payload)
        .toEqual(fakeCameras);
    });

    it('should dispatch "getSimilarCamerasByIdAction.pending" and "getSimilarCamerasByIdAction.rejected" when server response 400', async () => {
      const fakeId = String(fakeCameras[0].id);
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${fakeId}/similar`).reply(400);

      await store.dispatch(getSimilarCamerasByIdAction(fakeId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getSimilarCamerasByIdAction.pending.type,
        getSimilarCamerasByIdAction.rejected.type
      ]);
    });
  });

  describe('getCameraByIdAction', () => {
    it('should dispatch "getCameraByIdAction.pending" and "getCameraByIdAction.fulfilled" when server response 200', async () => {
      const fakeId = String(fakeCurrentCamera.id);
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${fakeId}`).reply(200, fakeCurrentCamera);

      await store.dispatch(getCameraByIdAction(fakeId));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const getCameraByIdActionFulfilled = emittedActions.at(1) as ReturnType<typeof getCameraByIdAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        getCameraByIdAction.pending.type,
        getCameraByIdAction.fulfilled.type
      ]);

      expect(getCameraByIdActionFulfilled.payload)
        .toEqual(fakeCurrentCamera);
    });

    it('should dispatch "getCameraByIdAction.pending" and "getCameraByIdAction.rejected" when server response 400', async () => {
      const fakeId = String(fakeCurrentCamera.id);
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${fakeId}`).reply(400);

      await store.dispatch(getCameraByIdAction(fakeId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getCameraByIdAction.pending.type,
        getCameraByIdAction.rejected.type
      ]);
    });
  });

  describe('fetchCameraReviewsByIdAction', () => {
    it('should dispatch "fetchCameraReviewsByIdAction.pending" and "fetchCameraReviewsByIdAction.fulfilled" when server response 200', async () => {
      const fakeId = String(fakeReviews[0].id);
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${fakeId}/reviews`).reply(200, fakeReviews);

      await store.dispatch(fetchCameraReviewsByIdAction(fakeId));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const fetchCameraReviewsByIdActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCameraReviewsByIdAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        fetchCameraReviewsByIdAction.pending.type,
        fetchCameraReviewsByIdAction.fulfilled.type
      ]);

      expect(fetchCameraReviewsByIdActionFulfilled.payload)
        .toEqual(fakeReviews);
    });

    it('should dispatch "fetchCameraReviewsByIdAction.pending" and "fetchCameraReviewsByIdAction.rejected" when server response 400', async () => {
      const fakeId = String(fakeReviews[0].id);
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${fakeId}/reviews`).reply(400);

      await store.dispatch(fetchCameraReviewsByIdAction(fakeId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCameraReviewsByIdAction.pending.type,
        fetchCameraReviewsByIdAction.rejected.type
      ]);
    });
  });

  describe('postOrderDataAction', () => {
    it('should dispatch "postOrderDataAction.pending" and "postOrderDataAction.fulfilled" when server response 200', async () => {
      const {camerasIds, coupon} = fakeOrderData;
      mockAxiosAdapter.onPost(APIRoute.Orders).reply(200, {camerasIds, coupon});

      await store.dispatch(postOrderDataAction(fakeOrderData));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const postOrderDataActionFulfilled = emittedActions.at(1) as ReturnType<typeof postOrderDataAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        postOrderDataAction.pending.type,
        postOrderDataAction.fulfilled.type
      ]);

      expect(postOrderDataActionFulfilled.payload)
        .toEqual(fakeOrderData);
    });

    it('should dispatch "postOrderDataAction.pending" and "postOrderDataAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Orders).reply(400);

      await store.dispatch(postOrderDataAction(fakeOrderData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postOrderDataAction.pending.type,
        postOrderDataAction.rejected.type
      ]);
    });
  });

  describe('postReviewDataAction', () => {
    it('should dispatch "postReviewDataAction.pending" and "postReviewDataAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onPost(APIRoute.Reviews).reply(200, fakeReviewData);

      await store.dispatch(postReviewDataAction(fakeReviewData));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const postReviewDataActionFulfilled = emittedActions.at(1) as ReturnType<typeof postReviewDataAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        postReviewDataAction.pending.type,
        postReviewDataAction.fulfilled.type
      ]);

      expect(postReviewDataActionFulfilled.payload)
        .toEqual(fakeReviewData);
    });

    it('should dispatch "postReviewDataAction.pending" and "postReviewDataAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Reviews).reply(400);

      await store.dispatch(postReviewDataAction(fakeReviewData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postReviewDataAction.pending.type,
        postReviewDataAction.rejected.type
      ]);
    });
  });

  describe('postCouponAction', () => {
    it('should dispatch "postCouponAction.pending" and "postCouponAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onPost(APIRoute.Coupons).reply(200, fakeCouponData);

      await store.dispatch(postCouponAction(fakeCouponData));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const postCouponActionFulfilled = emittedActions.at(1) as ReturnType<typeof postCouponAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        postCouponAction.pending.type,
        postCouponAction.fulfilled.type
      ]);

      expect(postCouponActionFulfilled.payload)
        .toEqual(fakeCouponData);
    });

    it('should dispatch "postCouponAction.pending" and "postCouponAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Coupons).reply(400);

      await store.dispatch(postCouponAction(fakeCouponData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCouponAction.pending.type,
        postCouponAction.rejected.type
      ]);
    });
  });
});
