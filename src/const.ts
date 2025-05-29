export const SITE_NAME = 'Фотошоп';
export const TIMEOUT_SHOW_ERROR = 3000;
export const RATING_STAR_NUMBER = 5;
export const REVIEWS_STEP_NUMBER = 3;
export const CLASS_SCROLL_LOCK = 'scroll-lock';
export const PHONE_NUMBER_START = '+7';
export const SIMILAR_CAMERAS_SLIDES_PER_VIEW = 3;
export const DEFAULT_PRODUCT_TAB = 2;
export const EMPTY_SEARCH_LIST_TEXT = 'Не найдено...';
export const CAMERAS_PER_PAGE = 9;
export const MAX_PAGES_PER_VIEW = 3;

export enum SearchParamsName {
  Page = 'page',
  Category = 'category',
  Type = 'type',
  Level = 'level',
  PriceMin = 'min',
  PriceMax = 'max',
  SortType = 'sort',
  SortOrder = 'order'
}

export const SearchLength = {
  Min: 3,
  MinToScroll: 5
} as const;

export const Delay = {
  ModalOpenFocus: 300,
  Slider: 3000
} as const;

export const BusketAmount = {
  Min: 1,
  Max: 9
} as const;

export enum NameSpace {
  Cameras = 'cameras',
  Reviews = 'reviews',
  User = 'user',
  Sort = 'sort',
  Filter = 'filter',
  Basket = 'basket'
}

export enum AppRoute {
  Index = '/',
  Product = '/product/:id',
  Basket = '/card',
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
  Sort = 'icon-sort',
  Success = 'icon-success',
  Thanks = 'icon-review-success',
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

export const ProductTabsCategory = ['Характеристики', 'Описание'] as const;

export enum SortByType {
  Price = 'price',
  Popular = 'popular'
}

export enum SortByOrder {
  Up = 'up',
  Down = 'down'
}

export enum ButtonText {
  Loading = 'Отправка...',
  Buy = 'Купить',
  AddToCart = 'Добавить в корзину',
  AddedToCart = 'В корзине',
  GoToCart = 'Перейти в корзину',
  ShowMore = 'Показать больше отзывов',
  AddReview = 'Оставить свой отзыв',
  Order = 'Заказать',
  Continue = 'Продолжить покупки',
  Remove = 'Удалить',
  PlaceAnOrder = 'Оформить заказ',
  LeaveReview = 'Отправить отзыв',
  GoToCatalog = 'Вернуться к покупкам',
  Apply = 'Применить'
}

export enum ModalTitle {
  SuccessfullyAdded = 'Товар успешно добавлен в корзину',
  ThanksForPurchase = 'Спасибо за покупку',
  AddToBasket = 'Добавить товар в корзину',
  RemoveItemConfirm = 'Удалить этот товар?',
  LeaveReview = 'Оставить отзыв',
  ThanksForReview = 'Спасибо за отзыв'
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
  Reviews = 'Список отзывов пуст',
  Basket = 'Нет добавленных товаров'
}

export const SocialIconSize = {
  Width: 20,
  Height: 20,
} as const;

export enum APIRoute {
  Cameras = '/cameras',
  PromoCameras = '/promo',
  Orders = '/orders',
  Reviews = '/reviews',
  Coupons = '/coupons',
}

export enum DateFormat {
  DateTime = 'YYYY/MM/DD',
  Review = 'DD MMMM'
}

export enum CameraCategory {
  Video = 'Видеокамера',
  Photo = 'Фотоаппарат'
}

export enum FilterItemType {
  Digital = 'digital',
  Film = 'film',
  Snapshot = 'snapshot',
  Collection = 'collection',
}
export const TranslatedFilterItemType = {
  [FilterItemType.Digital]: 'Цифровая',
  [FilterItemType.Film]: 'Плёночная',
  [FilterItemType.Snapshot]: 'Моментальная',
  [FilterItemType.Collection]: 'Коллекционная',
} as const;

export enum FilterItemLevel {
  Zero = 'zero',
  NonProfessional = 'nonProfessional',
  Professional = 'professional',
}
export const TranslatedFilterItemLevel = {
  [FilterItemLevel.Zero]: 'Нулевой',
  [FilterItemLevel.NonProfessional]: 'Любительский',
  [FilterItemLevel.Professional]: 'Профессиональный',
} as const;

export enum FilterCategory {
  Photocamera = 'photocamera',
  Videocamera = 'videocamera'
}

export const DiscountByAmount = {
  low: 3,
  medium: 5,
  high: 10,
  max: 15,
} as const;

export const DiscountReductionByCost = {
  low: 1,
  medium: 2,
  high: 3,
} as const;

export const ratingNames = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

export const ReviewValidNumber = {
  Rating: {
    min: 1,
    max: 5
  },
  Text: {
    userName: {
      min: 2,
      max: 15
    },
    general: {
      min: 10,
      max: 160
    }
  }
} as const;
