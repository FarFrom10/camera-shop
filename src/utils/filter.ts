import { CameraCategory, FilterCategory, FilterItemLevel, FilterItemType, TranslatedFilterItemLevel, TranslatedFilterItemType } from '../const';
import { CameraData } from '../types/cameras';
import { StateWholeFilter } from '../types/state';
import { FilterCameraType, FilterLevel, FilterPrice } from '../types/types';

const isFiltersUnused = (properties: Record<string, boolean>) => Object.values(properties).every((item) => item === false);

function filterCamerasByCategory(cameras: CameraData[], category: FilterCategory | null): CameraData[] {
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

function filterCamerasByType(
  cameras: CameraData[],
  type: FilterCameraType,
): CameraData[]{
  if (isFiltersUnused(type)){
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

function filterCamerasByLevel(cameras: CameraData[], level: FilterLevel): CameraData[]{
  if (isFiltersUnused(level)){
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

function filterCamerasByPrice(cameras: CameraData[], price: FilterPrice): CameraData[]{
  const minPrice = Number(price.min);
  const maxPrice = Number(price.max);
  if (!minPrice && !maxPrice) {
    return cameras;
  }

  if (minPrice === maxPrice) {
    return cameras.filter((camera) => camera.price === minPrice);
  }
  if (minPrice && !maxPrice) {
    return cameras.filter((camera) => camera.price >= minPrice);
  }
  if (!minPrice && maxPrice) {
    return cameras.filter((camera) => camera.price <= maxPrice);
  }

  return cameras.filter((camera) => camera.price >= minPrice && camera.price <= maxPrice);
}

export function getFilteredCameras(
  cameras: CameraData[],
  wholeFilterState: StateWholeFilter
): CameraData[] {
  const {category, cameraType, level, price} = wholeFilterState;
  let updatedCameras = cameras;

  updatedCameras = filterCamerasByCategory(updatedCameras, category);
  updatedCameras = filterCamerasByType(updatedCameras, cameraType);
  updatedCameras = filterCamerasByLevel(updatedCameras, level);
  updatedCameras = filterCamerasByPrice(updatedCameras, price);

  return updatedCameras;
}
