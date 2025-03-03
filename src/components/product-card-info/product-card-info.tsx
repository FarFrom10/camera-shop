import { PriceClass } from '../../const';
import ProductPrice from '../product-price/product-price';
import ProductRating from '../product-rating/product-rating';

type ProductCardInfoProps = {
  name: string;
  rating: number;
  reviewCount: number;
  price: number;
}

function ProductCardInfo({name, rating, reviewCount, price}: ProductCardInfoProps): JSX.Element {
  return (
    <div className="product-card__info">
      <ProductRating ratingNumber={rating} reviewCount={reviewCount}/>
      <p className="product-card__title">
        {name}
      </p>
      <ProductPrice priceClass={PriceClass.ProductCard} price={price}/>
    </div>
  );
}

export default ProductCardInfo;
