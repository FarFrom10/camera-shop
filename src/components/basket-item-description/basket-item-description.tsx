import { memo, useMemo } from 'react';
import { CameraCategory, PriceClass } from '../../const';
import { CameraData } from '../../types/cameras';
import ProductPrice from '../product-price/product-price';

type BasketItemDescriptionProps = {
  camera: CameraData;
  shouldDisplayPrice?: boolean;
}

function BasketItemDescriptionTemplate({shouldDisplayPrice = false, camera}: BasketItemDescriptionProps): JSX.Element {
  const cameraCategory = useMemo(() => camera.category === CameraCategory.Photo
    ? 'фотокамера'
    : 'видеокамера'
  , [camera.category]);

  return (
    <div data-testid='basketItemDescription' className="basket-item__description">
      <p className="basket-item__title">
        {`${camera.category} "${camera.name}"`}
      </p>
      <ul className="basket-item__list">
        <li className="basket-item__list-item">
          <span className="basket-item__article">Артикул:</span>{' '}
          <span className="basket-item__number">
            {camera.vendorCode}
          </span>
        </li>
        <li className="basket-item__list-item">
          {
            `${camera.type} ${cameraCategory}`
          }
        </li>
        <li className="basket-item__list-item">
          {`${camera.level} уровень`}
        </li>
      </ul>
      {shouldDisplayPrice &&
      <ProductPrice priceClass={PriceClass.BasketItem} price={camera.price}/>}
    </div>
  );
}

const BasketItemDescription = memo(BasketItemDescriptionTemplate);

export default BasketItemDescription;
