import { memo } from 'react';
import { CameraData } from '../../types/cameras';

type ProductTabsListProps = {
  camera: CameraData;
}

function ProductTabsListTemplate({camera}: ProductTabsListProps): JSX.Element {
  const {
    vendorCode,
    type,
    category,
    level,
  } = camera;
  return (
    <ul data-testid='productTabsList' className="product__tabs-list">
      <li className="item-list">
        <span className="item-list__title">Артикул:</span>
        <p className="item-list__text">{vendorCode}</p>
      </li>
      <li className="item-list">
        <span className="item-list__title">Категория:</span>
        <p className="item-list__text">{category}</p>
      </li>
      <li className="item-list">
        <span className="item-list__title">Тип камеры:</span>
        <p className="item-list__text">{type}</p>
      </li>
      <li className="item-list">
        <span className="item-list__title">Уровень:</span>
        <p className="item-list__text">{level}</p>
      </li>
    </ul>
  );
}

const ProductTabsList = memo(ProductTabsListTemplate);

export default ProductTabsList;
