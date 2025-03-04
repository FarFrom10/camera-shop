import { PriceClass } from '../../const';
import { convertPrice } from '../../utils/common';

type ProductPriceProps = {
  price: number;
  priceClass: PriceClass;
}

function ProductPrice({price, priceClass}: ProductPriceProps): JSX.Element {
  return(
    <p className={priceClass}>
      <span className="visually-hidden">Цена:</span>
      {convertPrice(price)}
    </p>
  );
}

export default ProductPrice;
