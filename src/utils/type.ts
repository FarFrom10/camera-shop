import { AppRoute, ProductTabsCategory } from '../const';

export const isValueAppRoute = (value: string): value is AppRoute => Object.values(AppRoute).includes(value as AppRoute);

export const isValueProductTabsCategory = (value: string): value is ProductTabsCategory => Object.values(ProductTabsCategory).includes(value as ProductTabsCategory);
