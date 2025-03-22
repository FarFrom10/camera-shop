import { memo } from 'react';
import { PriceClass } from '../../const';
import { convertPrice } from '../../utils/common';

type ProductPriceProps = {
  price: number;
  priceClass: PriceClass;
}

function ProductPriceTemplate({price, priceClass}: ProductPriceProps): JSX.Element {
  return(
    <p data-testid='productPriceContainer' className={priceClass}>
      <span className="visually-hidden">Цена:</span>
      {convertPrice(price)}
    </p>
  );
}

const ProductPrice = memo(ProductPriceTemplate);

export default ProductPrice;
