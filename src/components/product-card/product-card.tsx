import { generatePath } from 'react-router-dom';
import { AppRoute, ButtonText, CommonPictureCategory } from '../../const';
import { CameraData } from '../../types/cameras';
import ButtonMoreDetails from '../button-more-details/button-more-details';
import CommonButton from '../common-button/common-button';
import CommonPicture from '../common-picture/common-picture';
import ProductCardInfo from '../product-card-info/product-card-info';

type ProductCardProps = {
  camera: CameraData;
  onButtonClick: (id: number | null) => void ;
}

function ProductCard({camera, onButtonClick}: ProductCardProps): JSX.Element {
  const {
    id,
    name,
    price,
    rating,
    reviewCount,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
  } = camera;

  const handleButtonClick = () => onButtonClick(id);
  const path = generatePath(AppRoute.Product, {id:String(id)});

  return(
    <div data-testid='productCardContainer' className="product-card">
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
        <CommonButton onButtonClick={handleButtonClick} buttonText={ButtonText.Buy} isProductCard/>
        <ButtonMoreDetails route={path}/>
      </div>
    </div>
  );
}

export default ProductCard;
