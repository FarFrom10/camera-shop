import { mockCameras, mockCurrentCamera, mockPromoCameras } from '../../mocks/mock-test';
import { fetchCamerasAction, fetchPromoCamerasAction, getCameraByIdAction } from '../api-actions';
import { camerasProcess } from './cameras-process.slice';

describe('CameraProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      cameras: mockCameras,
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
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
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCamerasLoading" to "true" with "fetchCamerasAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: true,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchCamerasAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "cameras" and set "isCamerasLoading" to "false" with "fetchCamerasAction.fulfilled" action', () => {
    const expectedState = {
      cameras: mockCameras,
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchCamerasAction.fulfilled(mockCameras, '', undefined));

    expect(result).toEqual(expectedState);
  });
  it('should set "isCamerasLoading" to "false" with "fetchCamerasAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchCamerasAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isPromoCamerasLoading"  with "fetchPromoCamerasAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: true,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchPromoCamerasAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "promoCameras" and set "isPromoCamerasLoading" to "false" with "fetchPromoCamerasAction.fulfilled" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: mockPromoCameras,
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchPromoCamerasAction.fulfilled(mockPromoCameras, '', undefined));

    expect(result).toEqual(expectedState);
  });
  it('should set "isPromoCamerasLoading" to "false" with "fetchPromoCamerasAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, fetchPromoCamerasAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCurrentCameraLoading" to "true" with "getCameraByIdAction.pending" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: true,
    };

    const result = camerasProcess.reducer(undefined, getCameraByIdAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should add data to "currentCamera" and set "isCurrentCameraLoading" to "false" with "getCameraByIdAction.fulfilled" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: mockCurrentCamera,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };
    const fakeId = String(mockCurrentCamera.id);

    const result = camerasProcess.reducer(undefined, getCameraByIdAction.fulfilled(mockCurrentCamera, '', fakeId));

    expect(result).toEqual(expectedState);
  });
  it('should set "isCurrentCameraLoading" to "false" with "getCameraByIdAction.rejected" action', () => {
    const expectedState = {
      cameras: [],
      promoCameras: [],
      currentCamera: null,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = camerasProcess.reducer(undefined, getCameraByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
