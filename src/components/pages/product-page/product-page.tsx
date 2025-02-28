import { AppRoute } from '../../../const';
import ProductPageContent from '../../product-page-content/product-page-content';
import Title from '../../title/title';

function ProductPage(): JSX.Element {
  return (
    <>
      <Title pageName={AppRoute.Product}/>
      <ProductPageContent/>
    </>
  );
}

export default ProductPage;
