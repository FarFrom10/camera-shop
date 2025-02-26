import { TemporaryNumbers } from '../../const';
import ProductRating from '../product-rating/product-rating';

function ProductCardInfo(): JSX.Element {
  return (
    <div className="product-card__info">
      <ProductRating ratingNumber={TemporaryNumbers.Rating}/>
      <p className="product-card__title">
                  Ретрокамера «Das Auge IV»
      </p>
      <p className="product-card__price">
        <span className="visually-hidden">Цена:</span>73 450 ₽
      </p>
    </div>
  );
}

export default ProductCardInfo;
