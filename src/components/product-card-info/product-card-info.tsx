import { PriceClass, TemporaryNumbers } from '../../const';
import ProductPrice from '../product-price/product-price';
import ProductRating from '../product-rating/product-rating';

function ProductCardInfo(): JSX.Element {
  return (
    <div className="product-card__info">
      <ProductRating ratingNumber={TemporaryNumbers.Rating}/>
      <p className="product-card__title">
                  Ретрокамера «Das Auge IV»
      </p>
      <ProductPrice priceClass={PriceClass.ProductCard} price={TemporaryNumbers.price}/>
    </div>
  );
}

export default ProductCardInfo;
