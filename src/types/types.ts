import { FilterItemType } from '../const';

export type ModalStateType = {
  isOpen: boolean;
  currentId: number | null;
}

export type FilterPrice = {
  min: string;
  max: string;
}

export type FilterCameraType = {
  [key in FilterItemType]: boolean
}

export type FilterLevel = {
  zero: boolean;
  nonProfessional: boolean;
  professional: boolean;
}

export type PriceRange = {
  currentMinPrice: number;
  currentMaxPrice: number;
  minPrice: number;
  maxPrice: number;
}

export type FormReviewType = {
  rating: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
}

export type PromoStatus = {
  required: boolean;
  error: boolean;
  success: boolean;
}

export type PromoCode = {
  coupon: string | null;
  discount: number;
}
