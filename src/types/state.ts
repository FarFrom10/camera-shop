import { NameSpace } from '../const';
import { store } from '../store';
import { CamerasData } from './cameras';

export type State = ReturnType<typeof store.getState>;
export type StateCameras = Pick<State, NameSpace.Cameras>

export type AppDispatch = typeof store.dispatch;

export type CamerasProcess = {
  cameras: CamerasData[];
  fullCamera: null;

  isCamerasLoading: boolean;
  isFullCameraLoading: boolean;
}
