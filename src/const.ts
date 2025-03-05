export const SITE_NAME = 'Фотошоп';
export const TIMEOUT_SHOW_ERROR = 3000;
export const RATING_STAR_NUMBER = 5;

export const TEMPORARY_ALT_TEXT = 'ВРЕМЕННЫЙ ТЕКСТ';

export const TemporaryNumbers = {
  Rating: 2 ,
  ReviewCount: 666,
  BasketList: 2,
  price: 73629
} as const;

export const TemporaryImages = {
  PreviewImg: 'img/content/das-auge.jpg',
  PreviewImg2x: 'img/content/das-auge@2x.jpg',
  PreviewImgWebp: 'img/content/das-auge.webp',
  PreviewImgWebp2x: 'img/content/das-auge@2x.webp'
} as const;

export const BusketAmount = {
  Min: 1,
  Max: 99
} as const;

export enum NameSpace {
  Cameras = 'cameras',
  Reviews = 'reviews,'
}

export enum AppRoute {
  Index = '/',
  Product = '/product/:id',
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
  ArrowSide = 'icon-arrow',
  Star = 'icon-star',
  StarFull = 'icon-full-star',
}

export enum ButtonQuantityDirection {
  Prev = 'prev',
  Next = 'next',
}

export enum CommonPictureCategory {
  ProductCard = 'ProductCard',
  ProductPage = 'ProductPage',
  BasketItem = 'BasketItem',
  Banner = 'Banner'
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

export enum PriceClass {
  ProductCard = 'product-card__price',
  ProductPage = 'product__price',
  BasketItem = 'basket-item__price',
  BasketItemTotal = 'basket-item__total-price',
}

export enum CommonPictureClass {
  Product = 'product-card__img',
  Basket = 'basket-item__img',
  Banner = 'banner',
}

export enum ProductRatingClass {
  ProductPage = 'product__rate',
  ProductCard = 'product-card__rate',
  ReviewCard = 'review-card__rate',
}

export const SocialIconSize = {
  Width: 20,
  Height: 20,
} as const;

export enum APIRoute {
  Cameras = '/cameras',
  PromoCameras = '/promo',
}

export enum DateFormat {
  DateTime = 'YYYY/MM/DD',
  Review = 'D MMMM'
}
