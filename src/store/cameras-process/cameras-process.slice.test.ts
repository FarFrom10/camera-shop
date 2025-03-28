import { fakeCameras, fakeCurrentCamera, fakePromoCameras } from '../../mocks/mock-test';
import { fetchCamerasAction, fetchPromoCamerasAction, getCameraByIdAction, getSimilarCamerasByIdAction } from '../api-actions';
import { camerasProcess } from './cameras-process.slice';

describe('CameraProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      cameras: fakeCameras,
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCamerasLoading" to "true" with "fetchCamerasAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: true,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchCamerasAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "cameras" and set "isCamerasLoading" to "false" with "fetchCamerasAction.fulfilled" action', () => {
    const expectedState = {
      cameras: fakeCameras,
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchCamerasAction.fulfilled(fakeCameras, '', undefined));

    expect(result).toEqual(expectedState);
  });
  it('should set "isCamerasLoading" to "false" with "fetchCamerasAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchCamerasAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isPromoCamerasLoading"  with "fetchPromoCamerasAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: true,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchPromoCamerasAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "promoCameras" and set "isPromoCamerasLoading" to "false" with "fetchPromoCamerasAction.fulfilled" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: fakePromoCameras,
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchPromoCamerasAction.fulfilled(fakePromoCameras, '', undefined));

    expect(result).toEqual(expectedState);
  });
  it('should set "isPromoCamerasLoading" to "false" with "fetchPromoCamerasAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchPromoCamerasAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCurrentCameraLoading" to "true" with "getCameraByIdAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: true,
    };

    const result = camerasProcess.reducer(undefined, getCameraByIdAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "currentCamera" and set "isCurrentCameraLoading" to "false" with "getCameraByIdAction.fulfilled" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: fakeCurrentCamera,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };
    const fakeId = String(fakeCurrentCamera.id);

    const result = camerasProcess.reducer(undefined, getCameraByIdAction.fulfilled(fakeCurrentCamera, '', fakeId));

    expect(result).toEqual(expectedState);
  });
  it('should set "isCurrentCameraLoading" to "false" with "getCameraByIdAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, getCameraByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isSimilarCamerasLoading" to "true" with "getSimilarCamerasByIdAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: true,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, getSimilarCamerasByIdAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "similarCameras" and set "isSimilarCamerasLoading" to "false" with "getSimilarCamerasByIdAction.fulfilled" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: fakeCameras,
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };
    const fakeId = String(fakeCurrentCamera.id);

    const result = camerasProcess.reducer(undefined, getSimilarCamerasByIdAction.fulfilled(fakeCameras, '', fakeId));

    expect(result).toEqual(expectedState);
  });
  it('should set "isSimilarCamerasLoading" to "false" with "getSimilarCamerasByIdAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      similarCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isSimilarCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, getSimilarCamerasByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
