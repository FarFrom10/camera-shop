import { CameraCategory, FilterCategory, FilterItemLevel, FilterItemType, TranslatedFilterItemLevel, TranslatedFilterItemType } from '../const';
import { CameraData } from '../types/cameras';
import { FilterCameraType, FilterLevel } from '../types/types';

export function filterCamerasByCategory(cameras: CameraData[], category: FilterCategory | null): CameraData[] {
  if (category === null) {
    return cameras;
  }

  switch(category) {
    case FilterCategory.Photocamera:
      return cameras.filter((camera) => String(camera.category) === String(CameraCategory.Photo));
    case FilterCategory.Videocamera:
      return cameras.filter((camera) => String(camera.category) === String(CameraCategory.Video));
    default:
      return cameras;
  }
}

export function filterCamerasByType(cameras: CameraData[], type: FilterCameraType): CameraData[]{
  const isFiltersUnused = Object.values(type).every((item) => item === false);
  if (isFiltersUnused){
    return cameras;
  }

  const filteredByTypeCollection = cameras.filter((camera) =>
    type.collection && camera.type === TranslatedFilterItemType[FilterItemType.Collection]
  );
  const filteredByTypeDigital = cameras.filter((camera) =>
    type.digital && camera.type === TranslatedFilterItemType[FilterItemType.Digital]
  );
  const filteredByTypeFilm = cameras.filter((camera) =>
    type.film && camera.type === TranslatedFilterItemType[FilterItemType.Film]
  );
  const filteredByTypeSnapshot = cameras.filter((camera) =>
    type.snapshot && camera.type === TranslatedFilterItemType[FilterItemType.Snapshot]
  );

  return [
    ...filteredByTypeCollection,
    ...filteredByTypeDigital,
    ...filteredByTypeFilm,
    ...filteredByTypeSnapshot,
  ];
}

export function filterCamerasByLevel(cameras: CameraData[], level: FilterLevel): CameraData[]{
  const isFiltersUnused = Object.values(level).every((item) => item === false);
  if (isFiltersUnused){
    return cameras;
  }

  const filteredByLevelZero = cameras.filter((camera) =>
    level.zero && camera.level === TranslatedFilterItemLevel[FilterItemLevel.Zero]
  );
  const filteredByLevelNonProfessional = cameras.filter((camera) =>
    level.nonProfessional && camera.level === TranslatedFilterItemLevel[FilterItemLevel.NonProfessional]
  );
  const filteredByLevelProfessional = cameras.filter((camera) =>
    level.professional && camera.level === TranslatedFilterItemLevel[FilterItemLevel.Professional]
  );

  return [
    ...filteredByLevelZero,
    ...filteredByLevelNonProfessional,
    ...filteredByLevelProfessional,
  ];
}


export function getFilteredCameras(
  cameras: CameraData[],
  category: FilterCategory | null,
  type: FilterCameraType,
  level: FilterLevel,
): CameraData[] {
  let updatedCameras = cameras;

  updatedCameras = filterCamerasByCategory(cameras, category);
  updatedCameras = filterCamerasByType(cameras, type);
  updatedCameras = filterCamerasByLevel(cameras, level);

  return updatedCameras;
}
