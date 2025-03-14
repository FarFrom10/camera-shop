import { NameSpace } from '../../const';
import { fakeCameras, fakePromoCameras, fakeCurrentCamera } from '../../mocks/mock-test';
import { selectCameras, selectCurrentCamera, selectIsCamerasLoading, selectIsCurrentCameraLoading, selectIsPromoCamerasLoading, selectPromoCameras } from './cameras-process.selectors';

describe('CamerasProcess selectors', () => {
  const state = {
    [NameSpace.Cameras]: {
      cameras: fakeCameras,
      promoCameras: fakePromoCameras,
      currentCamera: fakeCurrentCamera,

      isCamerasLoading: false,
      isPromoCamerasLoading: false,
      isCurrentCameraLoading: false,
    }
  };

  it('should return cameras from state', () => {
    const { cameras } = state[NameSpace.Cameras];
    const result = selectCameras(state);
    expect(result).toStrictEqual(cameras);
  });

  it('should return promoCameras from state', () => {
    const { promoCameras } = state[NameSpace.Cameras];
    const result = selectPromoCameras(state);
    expect(result).toStrictEqual(promoCameras);
  });

  it('should return currentCamera from state', () => {
    const { currentCamera } = state[NameSpace.Cameras];
    const result = selectCurrentCamera(state);
    expect(result).toStrictEqual(currentCamera);
  });

  it('should return isCamerasLoading from state', () => {
    const { isCamerasLoading } = state[NameSpace.Cameras];
    const result = selectIsCamerasLoading(state);
    expect(result).toBe(isCamerasLoading);
  });

  it('should return isPromoCamerasLoading from state', () => {
    const { isPromoCamerasLoading } = state[NameSpace.Cameras];
    const result = selectIsPromoCamerasLoading(state);
    expect(result).toBe(isPromoCamerasLoading);
  });

  it('should return isCurrentCameraLoading from state', () => {
    const { isCurrentCameraLoading } = state[NameSpace.Cameras];
    const result = selectIsCurrentCameraLoading(state);
    expect(result).toBe(isCurrentCameraLoading);
  });
});
