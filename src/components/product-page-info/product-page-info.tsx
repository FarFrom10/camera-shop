import { ButtonText, CommonPictureCategory, PriceClass, ProductRatingClass } from '../../const';
import { useModalAddToBasket } from '../../hooks/use-modal-add-to-basket';
import { useModalBasketSuccess } from '../../hooks/use-modal-basket-success';
import { CameraData } from '../../types/cameras';
import CommonButton from '../common-button/common-button';
import CommonPicture from '../common-picture/common-picture';
import ModalAddToBasket from '../modal/modal-add-to-basket/modal-add-to-basket';
import ModalBasketSuccess from '../modal/modal-added-to-basket/modal-basket-success';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import ProductPageTabs from '../product-page-tabs/product-page-tabs';
import ProductPrice from '../product-price/product-price';
import ProductRating from '../product-rating/product-rating';

type ProductPageInfoProps = {
  camera: CameraData;
}

function ProductPageInfo({camera}: ProductPageInfoProps): JSX.Element {
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

  const [
    modalAddToBasket,
    handleModalAddToBasketOpen,
    handleModalAddToBasketClose,
    currentModalCamera,
  ] = useModalAddToBasket({cameras: [camera]});

  const {
    handleModalBasketSuccessOpen,
    handleModalBasketSuccessClose,
    handleNavigateToCatalog,
    showBasketSuccess
  } = useModalBasketSuccess();

  const handleAddToCartClick = () => handleModalAddToBasketOpen(id);

  return (
    <section data-testid='productPageInfo' className="product">
      <div className="container">
        <CommonPicture
          name={name}
          id={String(id)}
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
          <CommonButton onButtonClick={handleAddToCartClick} buttonText={ButtonText.AddToCart} isAddToCart/>
          <ProductPageTabs camera={camera}/>
        </div>
      </div>

      <ModalWrapper
        onModalClose={handleModalAddToBasketClose}
        isActive={modalAddToBasket.isOpen}
      >
        <ModalAddToBasket
          camera={currentModalCamera}
          onModalClose={handleModalAddToBasketClose}
          onModalAddedToBasketOpen={handleModalBasketSuccessOpen}
        />
      </ModalWrapper>

      <ModalWrapper
        onModalClose={handleModalBasketSuccessClose}
        isActive={showBasketSuccess}
        isModalNarrow
      >
        <ModalBasketSuccess onModalClose={handleNavigateToCatalog}/>
      </ModalWrapper>
    </section>
  );
}

export default ProductPageInfo;
