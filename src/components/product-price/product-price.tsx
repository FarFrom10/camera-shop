import { ConvertPrice } from '../../utils/common';

type ProductPriceProps = {
  price: number;
  isProductPage?: boolean;
}

function ProductPrice({price, isProductPage = false}: ProductPriceProps): JSX.Element {
  return(
    <p className={isProductPage ? 'product__price' : 'product-card__price'}>
      <span className="visually-hidden">Цена:</span>
      {ConvertPrice(price)}
    </p>
  );
}

export default ProductPrice;
