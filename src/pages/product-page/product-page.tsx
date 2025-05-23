import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ButtonUp from '../../components/button-up/button-up';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import ModalAddToBasket from '../../components/modal/modal-add-to-basket/modal-add-to-basket';
import ModalBasketSuccess from '../../components/modal/modal-added-to-basket/modal-basket-success';
import ModalWrapper from '../../components/modal/modal-wrapper/modal-wrapper';
import ProductPageContent from '../../components/product-page-content/product-page-content';
import ReviewForm from '../../components/review-form/review-form';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { useLoadProductPage } from '../../hooks/use-load-product-page';
import { useModalAddToBasket } from '../../hooks/use-modal-add-to-basket';
import { useModalBasketSuccess } from '../../hooks/use-modal-basket-success';
import { selectCurrentCamera, selectIsCurrentCameraLoading, selectIsSimilarCamerasLoading, selectSimilarCameras } from '../../store/cameras-process/cameras-process.selectors';
import { selectIsReviewsLoading } from '../../store/reviews-process/reviews-process.selectors';
import NotFoundPage from '../not-found-page/not-found-page';

function ProductPage(): JSX.Element {
  const isCurrentCameraLoading = useAppSelector(selectIsCurrentCameraLoading);
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const isSimilarCamerasLoading = useAppSelector(selectIsSimilarCamerasLoading);
  const currentCamera = useAppSelector(selectCurrentCamera);
  const similarCameras = useAppSelector(selectSimilarCameras);

  useLoadProductPage();

  const [
    modalAddToBasket,
    handleModalAddToBasketOpen,
    handleModalAddToBasketClose,
    currentModalCamera,
  ] = useModalAddToBasket({cameras: similarCameras});

  const {
    handleModalBasketSuccessOpen,
    handleModalBasketSuccessClose,
    handleNavigateToCatalog,
    showBasketSuccess
  } = useModalBasketSuccess();

  if(isCurrentCameraLoading || isReviewsLoading || isSimilarCamerasLoading) {
    return <LoadingScreen/>;
  }

  if(!currentCamera) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <main>
        <div data-testid='productPageContent' className="page-content">
          <Title pageName={AppRoute.Product}/>
          <Breadcrumbs/>
          <ProductPageContent similarCameras={similarCameras} currentCamera={currentCamera} onModalAddToBasketOpen={handleModalAddToBasketOpen}/>
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

        <ModalWrapper
          onModalClose={handleModalBasketSuccessClose}
          isActive
        >
          <ReviewForm/>
        </ModalWrapper>
      </main>
      <ButtonUp/>
    </>
  );
}

export default ProductPage;
