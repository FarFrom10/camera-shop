import { AppRoute, FilterCategory } from '../const';

export const isValueAppRoute = (value: string): value is AppRoute => Object.values(AppRoute).includes(value as AppRoute);

export const isValueFilterCategory = (value: string): value is FilterCategory => Object.values(FilterCategory).includes(value as FilterCategory);
