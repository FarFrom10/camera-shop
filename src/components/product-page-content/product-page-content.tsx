import { useAppSelector } from '../../hooks';
import { selectBasketItems } from '../../store/basket-process/basket-process.selectors';
import { CameraData } from '../../types/cameras';
import ProductPageInfo from '../product-page-info/product-page-info';
import ProductReviews from '../product-reviews/product-reviews';
import ProductsSimilarList from '../products-similar-list/products-similar-list';

type ProductPageContentProps = {
  currentCamera: CameraData;
  similarCameras: CameraData[];
  onModalAddToBasketOpen: (id: number | null) => void;
}

function ProductPageContent({currentCamera, similarCameras, onModalAddToBasketOpen}: ProductPageContentProps): JSX.Element {
  const camerasInCart = useAppSelector(selectBasketItems);

  return (
    <>
      <div data-testid='productPageInfoSection' className="page-content__section">
        <ProductPageInfo camera={currentCamera}/>
      </div>
      {similarCameras.length !== 0 &&
      <div data-testid='productPageSimilarSection' className="page-content__section">
        <ProductsSimilarList camerasInCart={camerasInCart} onModalAddToBasketOpen={onModalAddToBasketOpen} similarCameras={similarCameras}/>
      </div>}
      <div data-testid='productPageReviewsSection' className="page-content__section">
        <ProductReviews/>
      </div>
    </>
  );
}

export default ProductPageContent;
