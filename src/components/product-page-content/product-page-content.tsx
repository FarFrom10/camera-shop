import { CameraData } from '../../types/cameras';
import ProductPageInfo from '../product-page-info/product-page-info';
import ProductReviews from '../product-reviews/product-reviews';
import ProductsSimilarList from '../products-similar-list/products-similar-list';

type ProductPageContentProps = {
  currentCamera: CameraData;
  similarCameras: CameraData[];
  onModalContactMeOpen: (id: number | null) => void;
}

function ProductPageContent({currentCamera, similarCameras, onModalContactMeOpen}: ProductPageContentProps): JSX.Element {
  return (
    <>
      <div data-testid='productPageInfoSection' className="page-content__section">
        <ProductPageInfo camera={currentCamera}/>
      </div>
      <div data-testid='productPageSimilarSection' className="page-content__section">
        <ProductsSimilarList onModalContactMeOpen={onModalContactMeOpen} similarCameras={similarCameras}/>
      </div>
      <div data-testid='productPageReviewsSection' className="page-content__section">
        <ProductReviews/>
      </div>
    </>
  );
}

export default ProductPageContent;
