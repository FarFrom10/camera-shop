import { CameraCategory, FilterCategory } from '../const';
import { CameraData } from '../types/cameras';

export function filterCamerasByCategory(category: FilterCategory | null, cameras: CameraData[]): CameraData[] {
  switch(category) {
    case FilterCategory.Photocamera:
      return cameras.filter((camera) => String(camera.category) === String(CameraCategory.Photo));
    case FilterCategory.Videocamera:
      return cameras.filter((camera) => String(camera.category) === String(CameraCategory.Video));
    default:
      return cameras;
  }
}

// export function getFilteredCameras() {

// }
