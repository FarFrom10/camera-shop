export const RATING_STAR_NUMBER = 5;

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

export enum IconName {
  CartAdded = 'icon-basket',
  CartAdd = 'icon-add-basket',
  LogoHeader = 'icon-logo',
  LogoFooter = 'icon-logo-mono',
  ArrowMini = 'icon-arrow-mini',
  Star = 'icon-star',
  StarFull = 'icon-full-star',
}

export const BannerSize = {
  Width: 1280,
  Height: 280,
} as const;

export const ProductCardSize = {
  Width: 280,
  Height: 240,
} as const;

export const SocialIconSize = {
  Width: 20,
  Height: 20,
} as const;

export const TemporaryNumbers = {
  CatalogCards: 6,
  Rating: 2 ,
} as const;
