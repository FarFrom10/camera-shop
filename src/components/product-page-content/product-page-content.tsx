import ProductPageInfo from '../product-page-info/product-page-info';
import ProductReviews from '../product-reviews/product-reviews';

function ProductPageContent(): JSX.Element {
  return (
    <>
      <div className="page-content__section">
        <ProductPageInfo/>
      </div>
      <div className="page-content__section">
        <ProductReviews/>
      </div>
    </>
  );
}

export default ProductPageContent;
