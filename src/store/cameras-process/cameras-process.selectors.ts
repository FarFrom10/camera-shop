import { NameSpace } from '../../const';
import { CamerasData } from '../../types/cameras';
import { StateCameras } from '../../types/state';

export const selectPoducts = (state: StateCameras): CamerasData[] => state[NameSpace.Cameras].cameras;

export const selectIsCamerasLoading = (state: StateCameras): boolean => state[NameSpace.Cameras].isCamerasLoading;
