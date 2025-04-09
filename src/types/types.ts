export type ModalContactMeType = {
  isOpen: boolean;
  currentId: number | null;
}

export type FilterPrice = {
  min: string;
  max: string;
}

export type FilterCameraType = {
  digital: boolean;
  film: boolean;
  snapshot: boolean;
  collection: boolean;
}

export type FilterLevel = {
  zero: boolean;
  nonProfessional: boolean;
  professional: boolean;
}
