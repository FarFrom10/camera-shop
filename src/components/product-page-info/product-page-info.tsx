import { ButtonText, CommonPictureCategory, PriceClass, ProductRatingClass } from '../../const';
import { CameraData } from '../../types/cameras';
import CommonButton from '../common-button/common-button';
import CommonPicture from '../common-picture/common-picture';
import ProductPageTabs from '../product-page-tabs/product-page-tabs';
import ProductPrice from '../product-price/product-price';
import ProductRating from '../product-rating/product-rating';

type ProductPageInfoProps = {
  camera: CameraData;
}

function ProductPageInfo({camera}: ProductPageInfoProps): JSX.Element {
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

  return (
    <section data-testid='productPageInfo' className="product">
      <div className="container">
        <CommonPicture
          category={CommonPictureCategory.ProductPage}
          img={previewImg}
          img2x={previewImg2x}
          webp={previewImgWebp}
          webp2x={previewImgWebp2x}
        />
        <div className="product__content">
          <h1 className="title title--h3">{name}</h1>
          <ProductRating ratingNumber={rating} reviewCount={reviewCount} ratingClass={ProductRatingClass.ProductPage}/>
          <ProductPrice priceClass={PriceClass.ProductPage} price={price}/>
          <CommonButton buttonText={ButtonText.AddToCart} isAddToCart/>
          <ProductPageTabs camera={camera}/>
        </div>
      </div>
    </section>
  );
}

export default ProductPageInfo;
