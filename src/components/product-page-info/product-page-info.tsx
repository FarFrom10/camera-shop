import { TemporaryNumbers } from '../../const';
import CommonButton from '../common-button/common-button';
import ProductCardImage from '../product-card-image/product-card-image';
import ProductPageTabs from '../product-page-tabs/product-page-tabs';
import ProductPrice from '../product-price/product-price';
import ProductRating from '../product-rating/product-rating';

function ProductPageInfo(): JSX.Element {
  return (
    <section className="product">
      <div className="container">
        <ProductCardImage isProductPage/>
        <div className="product__content">
          <h1 className="title title--h3">Ретрокамера «Das Auge IV»</h1>
          <ProductRating ratingNumber={TemporaryNumbers.Rating} isProductPage/>
          <ProductPrice price={TemporaryNumbers.price} isProductPage/>
          <CommonButton isAddToCart/>
          <ProductPageTabs/>
        </div>
      </div>
    </section>
  );
}

export default ProductPageInfo;
