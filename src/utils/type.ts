import { AppRoute } from '../const';

export const isValueAppRoute = (value: string): value is AppRoute => Object.values(AppRoute).includes(value as AppRoute);
