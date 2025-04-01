export const SITE_NAME = 'Фотошоп';
export const TIMEOUT_SHOW_ERROR = 3000;
export const RATING_STAR_NUMBER = 5;
export const REVIEWS_STEP_NUMBER = 3;
export const CLASS_SCROLL_LOCK = 'scroll-lock';
export const PHONE_NUMBER_START = '+7';
export const SIMILAR_CAMERAS_SLIDES_PER_VIEW = 3;

export const SearchLength = {
  Min: 3,
  MinToScroll: 5
} as const;

export const Delay = {
  ModalOpenFocus: 300,
  Slider: 3000
} as const;

export const PhoneMaxLength = {
  InputValue: 16,
  Numbers: 11
} as const;

export const Temporary = {
  Numbers: {
    rating: 2,
    reviewCount: 666,
    basketList: 2,
    price: 73629
  },
  BusketItemDescription: {
    name: 'ВРЕМЕННЫЕ ДАННЫЕ',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
  },
  Images: {
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp'
  },
  AltText: 'ВРЕМЕННЫЙ ТЕКСТ'
} as const;

export const BusketAmount = {
  Min: 1,
  Max: 99
} as const;

export enum NameSpace {
  Cameras = 'cameras',
  Reviews = 'reviews',
  User = 'user',
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
  Snowflake = 'icon-snowflake',
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
  Loading = 'Отправка...',
  Buy = 'Купить',
  AddToCart = 'Добавить в корзину',
  AddedToCart = 'В корзине',
  ShowMore = 'Показать больше отзывов',
  Order = 'Заказать'
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

export enum LogoClass {
  Header = 'header__logo',
  Footer = 'footer__logo',
}

export enum InputValidationErrorMessage {
  Phone = 'Формат: +7(9XX)XXX-XX-XX'
}

export const ServerConnectionStatusMessage = {
  Fail: {
    common: 'Ошибка соединения с сервером',
    camera: 'Не удалось загрузить информацию о товаре',
    similarCameras: 'Не удалось загрузить похожие товары',
    reviews: 'Не удалось загрузить отзывы'
  },
  Success: {
    contactMe: 'Товар добавлен в список отложенных товаров'
  }
} as const;

export enum EmptyListMessage {
  Cameras = 'Список товаров пуст',
  Reviews = 'Список отзывов пуст'
}

export const SocialIconSize = {
  Width: 20,
  Height: 20,
} as const;

export enum APIRoute {
  Cameras = '/cameras',
  PromoCameras = '/promo',
  Oders = '/orders',
}

export enum DateFormat {
  DateTime = 'YYYY/MM/DD',
  Review = 'DD MMMM'
}
