export enum AppRoute {
  Index = '/',
  Catalog = '/catalog',
  Product = '/product',
  Basket = '/basket',
  NotFound = '*',
}

export const RouteName = {
  [AppRoute.Index]: 'Главная',
  [AppRoute.Catalog]: 'Каталог',
  [AppRoute.Product]: 'Продукт',
  [AppRoute.Basket]: 'Корзина',
} as const;

export const SocialsNames = ['vk', 'pinterest', 'reddit'] as const;

export enum CartIconName {
  Added = 'icon-basket',
  Add = 'icon-add-basket',
}

export enum LogoIconName {
  Header = 'icon-logo',
  Footer = 'icon-logo-mono',
}

export const LogoSize = {
  Width: 100,
  Height: 36,
} as const;

export const BannerSize = {
  Width: 1280,
  Height: 280,
} as const;

export const SocialIconSize = {
  Width: 20,
  Height: 20,
} as const;
