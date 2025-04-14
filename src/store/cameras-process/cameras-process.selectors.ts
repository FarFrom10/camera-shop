import { NameSpace } from '../../const';
import { CameraData, PromoCameraData } from '../../types/cameras';
import { StateCameras } from '../../types/state';

export const selectCameras = (state: StateCameras): CameraData[] => state[NameSpace.Cameras].cameras;
export const selectSortedCameras = (state: StateCameras): CameraData[] => state[NameSpace.Cameras].sortedCameras;
export const selectPromoCameras = (state: StateCameras): PromoCameraData[] => state[NameSpace.Cameras].promoCameras;
export const selectSimilarCameras = (state: StateCameras): CameraData[] => state[NameSpace.Cameras].similarCameras;
export const selectCurrentCamera = (state: StateCameras): CameraData | null => state[NameSpace.Cameras].currentCamera;

export const selectIsCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isCamerasLoading;
export const selectIsPromoCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isPromoCamerasLoading;
export const selectIsSimilarCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isSimilarCamerasLoading;
export const selectIsCurrentCameraLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isCurrentCameraLoading;
