export const RATING_STAR_NUMBER = 5;

export const SITE_NAME = 'Фотошоп';

export enum AppRoute {
  Index = '/',
  Product = '/product',
  Basket = '/basket',
  NotFound = '*',
}

export const RouteName = {
  [AppRoute.Index]: 'Каталог',
  [AppRoute.Product]: 'Продукт',
  [AppRoute.Basket]: 'Корзина',
  [AppRoute.NotFound]: '404',
} as const;


export const SocialsNames = ['vk', 'pinterest', 'reddit'] as const;

export enum IconName {
  CartAdded = 'icon-basket',
  CartAdd = 'icon-add-basket',
  Lens = 'icon-lens',
  Close = 'icon-close',
  LogoHeader = 'icon-logo',
  LogoFooter = 'icon-logo-mono',
  ArrowMini = 'icon-arrow-mini',
  ArrowUp = 'icon-arrow2',
  Star = 'icon-star',
  StarFull = 'icon-full-star',
}

export enum ProductTabsCategory {
  Characteristics = 'Характеристики',
  Description = 'Описание',
}

export enum ButtonText {
  Buy = 'Купить',
  AddToCart = 'Добавить в корзину',
  AddedToCart = 'В корзине',
  ShowMore = 'Показать больше отзывов',
}

export const BannerSize = {
  Width: 1280,
  Height: 280,
} as const;


export const CardImageSize = {
  ProductCard: {
    Width: 280,
    Height: 240,
  },
  ProductPage: {
    Width: 560,
    Height: 480,
  }
} as const;

export const SocialIconSize = {
  Width: 20,
  Height: 20,
} as const;

export const TemporaryNumbers = {
  CatalogCards: 6,
  Reviews: 3,
  Rating: 2 ,
  price: 73629
} as const;
