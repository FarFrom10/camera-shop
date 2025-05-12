import { generatePath } from 'react-router-dom';
import { AppRoute, ButtonText, CommonPictureCategory, DEFAULT_PRODUCT_TAB } from '../../const';
import { CameraData } from '../../types/cameras';
import ButtonMoreDetails from '../button-more-details/button-more-details';
import CommonButton from '../common-button/common-button';
import CommonPicture from '../common-picture/common-picture';
import ProductCardInfo from '../product-card-info/product-card-info';
import { memo, useCallback, useMemo } from 'react';
import cn from 'classnames';

type ProductCardProps = {
  camera: CameraData;
  onButtonClick: (id: number | null) => void ;
  isSimilarProduct?: boolean;
  isAddedToCart: boolean;
}

function ProductCardTemplate({camera, onButtonClick, isSimilarProduct = false, isAddedToCart}: ProductCardProps): JSX.Element {
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

  const handleButtonClick = useCallback(() => onButtonClick(id), [onButtonClick, id]);
  const path = useMemo(() => `${generatePath(AppRoute.Product, {id:String(id)})}/${DEFAULT_PRODUCT_TAB}`, [id]);
  const style = isSimilarProduct ? {width: '90%', heigth: '100%'} : {};

  return(
    <div data-testid='productCardContainer' className={cn(
      'product-card',
      {'is-active': isSimilarProduct}
    )}
    style={style}
    >
      <CommonPicture
        name={name}
        id={String(id)}
        category={CommonPictureCategory.ProductCard}
        img={previewImg}
        img2x={previewImg2x}
        webp={previewImgWebp}
        webp2x={previewImgWebp2x}
      />
      <ProductCardInfo name={name} rating={rating} reviewCount={reviewCount} price={price}/>
      <div className="product-card__buttons">
        {
          isAddedToCart
            ? <CommonButton isGoToCart isInCart buttonText={ButtonText.AddedToCart} isProductCard/>
            : <CommonButton onButtonClick={handleButtonClick} buttonText={ButtonText.Buy} isProductCard/>

        }
        <ButtonMoreDetails route={path}/>
      </div>
    </div>
  );
}

const ProductCard = memo(ProductCardTemplate);

export default ProductCard;
