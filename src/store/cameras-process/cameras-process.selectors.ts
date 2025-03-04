import { NameSpace } from '../../const';
import { CameraData, PromoCameraData } from '../../types/cameras';
import { StateCameras } from '../../types/state';

export const selectCameras = (state: StateCameras): CameraData[] => state[NameSpace.Cameras].cameras;
export const selectPromoCameras = (state: StateCameras): PromoCameraData[] => state[NameSpace.Cameras].promoCameras;
export const selectCurrentCamera = (state: StateCameras): CameraData | null => state[NameSpace.Cameras].currentCamera;

export const selectIsCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isCamerasLoading;
export const selectIsPromoCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isPromoCamerasLoading;
export const selectIsCurrentCameraLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isCurrentCameraLoading;
