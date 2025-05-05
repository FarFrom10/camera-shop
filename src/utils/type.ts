import { AppRoute, FilterCategory, SortByOrder, SortByType } from '../const';

export const isValueAppRoute = (value: string): value is AppRoute => Object.values(AppRoute).includes(value as AppRoute);

export const isValueFilterCategory = (value: string): value is FilterCategory => Object.values(FilterCategory).includes(value as FilterCategory);

export const isValueSortType = (value: string): value is SortByType => Object.values(SortByType).includes(value as SortByType);

export const isValueSortOrder = (value: string): value is SortByOrder => Object.values(SortByOrder).includes(value as SortByOrder);

