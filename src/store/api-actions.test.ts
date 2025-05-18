import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import { AppThunkDispatch, extractActionsTypes } from '../types/mocks';
import { APIRoute } from '../const';
import { fetchCameraReviewsByIdAction, fetchCamerasAction, fetchPromoCamerasAction, getCameraByIdAction, getSimilarCamerasByIdAction, postContactMeDataAction } from './api-actions';
import { fakeCameras, fakeContactMeData, fakeCurrentCamera, fakePromoCameras, fakeReviews } from '../mocks/mock-test';

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

  describe('postContactMeDataAction', () => {
    it('should dispatch "postContactMeDataAction.pending" and "postContactMeDataAction.fulfilled" when server response 200', async () => {
      const {camerasIds, coupon, tel} = fakeContactMeData;
      mockAxiosAdapter.onPost(APIRoute.Orders).reply(200, {camerasIds, coupon, tel});

      await store.dispatch(postContactMeDataAction(fakeContactMeData));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const postContactMeDataActionFulfilled = emittedActions.at(1) as ReturnType<typeof postContactMeDataAction.fulfilled>;

      expect(extractedActionTypes).toEqual([
        postContactMeDataAction.pending.type,
        postContactMeDataAction.fulfilled.type
      ]);

      expect(postContactMeDataActionFulfilled.payload)
        .toEqual(fakeContactMeData);
    });

    it('should dispatch "postContactMeDataAction.pending" and "postContactMeDataAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Orders).reply(400);

      await store.dispatch(postContactMeDataAction(fakeContactMeData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postContactMeDataAction.pending.type,
        postContactMeDataAction.rejected.type
      ]);
    });
  });
});
