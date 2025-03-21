import { CameraData } from '../../types/cameras';
import ProductPageInfo from '../product-page-info/product-page-info';
import ProductReviews from '../product-reviews/product-reviews';

type ProductPageContentProps = {
  camera: CameraData;
}

function ProductPageContent({camera}: ProductPageContentProps): JSX.Element {
  return (
    <>
      <div data-testid='productPageInfoSection' className="page-content__section">
        <ProductPageInfo camera={camera}/>
      </div>
      <div data-testid='productPageReviewsSection' className="page-content__section">
        <ProductReviews/>
      </div>
    </>
  );
}

export default ProductPageContent;
