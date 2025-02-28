import { ButtonText } from '../../const';
import ButtonMoreDetails from '../button-more-details/button-more-details';
import CommonButton from '../common-button/common-button';
import ProductCardImage from '../product-card-image/product-card-image';
import ProductCardInfo from '../product-card-info/product-card-info';

function ProductCard(): JSX.Element {
  return(
    <div className="product-card">
      <ProductCardImage/>
      <ProductCardInfo/>
      <div className="product-card__buttons">
        <CommonButton buttonText={ButtonText.Buy} isProductCard/>
        <ButtonMoreDetails/>
      </div>
    </div>
  );
}

export default ProductCard;
