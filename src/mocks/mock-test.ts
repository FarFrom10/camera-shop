import { CameraCategory } from '../const';
import { CouponData, OrderData, ReviewData } from '../types/api';
import { BasketItemData, CameraData, CameraReview, PromoCameraData } from '../types/cameras';
import { PromoCode } from '../types/types';

export const fakeCurrentCamera: CameraData = {
  'id': 1,
  'name': 'Ретрокамера Dus Auge lV',
  'vendorCode': 'DA4IU67AD5',
  'type': 'Коллекционная',
  'category': CameraCategory.Video,
  'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
  'level': 'Нулевой',
  'price': 65000,
  'rating': 5,
  'reviewCount': 16,
  'previewImg': 'img/content/das-auge.jpg',
  'previewImg2x': 'img/content/das-auge@2x.jpg',
  'previewImgWebp': 'img/content/das-auge.webp',
  'previewImgWebp2x': 'img/content/das-auge@2x.webp'
};

export const fakeBasketCamera: BasketItemData = {
  'id': 1,
  'name': 'Ретрокамера Dus Auge lV',
  'vendorCode': 'DA4IU67AD5',
  'type': 'Коллекционная',
  'category': CameraCategory.Video,
  'description': 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
  'level': 'Нулевой',
  'price': 65000,
  'rating': 5,
  'reviewCount': 16,
  'previewImg': 'img/content/das-auge.jpg',
  'previewImg2x': 'img/content/das-auge@2x.jpg',
  'previewImgWebp': 'img/content/das-auge.webp',
  'previewImgWebp2x': 'img/content/das-auge@2x.webp',
  'amount': 1
};

export const fakeCameras: CameraData[] = [
  fakeCurrentCamera
];

export const fakeBasketCameras: BasketItemData[] = [
  fakeBasketCamera
];

export const fakePromoCameras: PromoCameraData[] = [
  {
    'id': 1,
    'name': 'Ретрокамера Dus Auge lV',
    'previewImg': 'img/content/promo.jpg',
    'previewImg2x': 'img/content/promo@2x.jpg',
    'previewImgWebp': 'img/content/promo.webp',
    'previewImgWebp2x': 'img/content/promo@2x.webp'
  }
];

export const fakeReview: CameraReview = {
  'id': 'f1d10ddd-2a21-4f71-9e1e-5f511703fbdd',
  'createAt': '2022-07-09T13:24:57.980Z',
  'cameraId': 1,
  'userName': 'Кирилл',
  'advantage': 'Легкая в плане веса, удобная в интерфейсе',
  'disadvantage': 'Быстро садиться зарядка',
  'review': 'Это моя первая камера. Я в восторге, нареканий нет',
  'rating': 5
};

export const fakeReviews: CameraReview[] = [
  fakeReview
];

export const fakeOrderData: OrderData = {
  camerasIds: [1],
  coupon: null
};

export const fakeReviewData: ReviewData = {
  cameraId: 1,
  rating: 1,
  userName: 'Respect',
  advantage: 'RespectRespect',
  disadvantage: 'RespectRespect',
  review: 'RespectRespectRespect',
};

export const fakeCouponData: CouponData = {
  coupon: 'FAKE-123'
};

export const fakePromoCode: PromoCode = {
  coupon: 'FAKE-123',
  discount: 10
};
