import { ButtonText, CommonPictureCategory } from '../../const';
import { CameraData } from '../../types/cameras';
import ButtonMoreDetails from '../button-more-details/button-more-details';
import CommonButton from '../common-button/common-button';
import CommonPicture from '../common-picture/common-picture';
import ProductCardInfo from '../product-card-info/product-card-info';

type ProductCardProps = {
  camera: CameraData;
}

function ProductCard({camera}: ProductCardProps): JSX.Element {
  const {
    name,
    price,
    rating,
    reviewCount,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
  } = camera;

  return(
    <div className="product-card">
      <CommonPicture
        category={CommonPictureCategory.ProductCard}
        name={name}
        img={previewImg}
        img2x={previewImg2x}
        webp={previewImgWebp}
        webp2x={previewImgWebp2x}
      />
      <ProductCardInfo name={name} rating={rating} reviewCount={reviewCount} price={price}/>
      <div className="product-card__buttons">
        <CommonButton buttonText={ButtonText.Buy} isProductCard/>
        <ButtonMoreDetails/>
      </div>
    </div>
  );
}

export default ProductCard;
