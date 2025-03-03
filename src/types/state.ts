import { NameSpace } from '../const';
import { store } from '../store';
import { CameraData, PromoCameraData } from './cameras';

export type State = ReturnType<typeof store.getState>;
export type StateCameras = Pick<State, NameSpace.Cameras>

export type AppDispatch = typeof store.dispatch;

export type CamerasProcess = {
  cameras: CameraData[];
  promoCameras: PromoCameraData[];
  fullCamera: null;

  isCamerasLoading: boolean;
  isPromoCamerasLoading: boolean;
  isFullCameraLoading: boolean;
}
