import { ProductCardSize } from '../../const';
import ButtonMoreDetails from '../button-more-details/button-more-details';
import CommonButton from '../common-button/common-button';
import ProductCardInfo from '../product-card-info/product-card-info';

function ProductCard(): JSX.Element {
  return(
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x"
          />
          <img
            src="img/content/das-auge.jpg"
            srcSet="img/content/das-auge@2x.jpg 2x"
            width={ProductCardSize.Width}
            height={ProductCardSize.Height}
            alt="Ретрокамера «Das Auge IV»"
          />
        </picture>
      </div>
      <ProductCardInfo/>
      <div className="product-card__buttons">
        <CommonButton/>
        <ButtonMoreDetails/>
      </div>
    </div>
  );
}

export default ProductCard;
