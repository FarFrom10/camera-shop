import { PriceClass } from '../../const';
import { ConvertPrice } from '../../utils/common';

type ProductPriceProps = {
  price: number;
  priceClass: PriceClass;
}

function ProductPrice({price, priceClass}: ProductPriceProps): JSX.Element {
  return(
    <p className={priceClass}>
      <span className="visually-hidden">Цена:</span>
      {ConvertPrice(price)}
    </p>
  );
}

export default ProductPrice;
