export type CameraType = 'Коллекционная' | 'Моментальная' | 'Цифровая' | 'Плёночная'
export type CameraCategory = 'Видеокамера' | 'Фотоаппарат'
export type CameraLevel = 'Нулевой' | 'Любительский' | 'Профессиональный'

export type CamerasData = {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraType;
  category: CameraCategory;
  description: string;
  level: CameraLevel;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

