import { NameSpace } from '../../const';
import { CameraData, PromoCameraData } from '../../types/cameras';
import { StateCameras } from '../../types/state';

export const selectCameras = (state: StateCameras): CameraData[] => state[NameSpace.Cameras].cameras;
export const selectPromoCameras = (state: StateCameras): PromoCameraData[] => state[NameSpace.Cameras].promoCameras;

export const selectIsCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isCamerasLoading;
export const selectIsPromoCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isPromoCamerasLoading;
