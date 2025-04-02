import { AppRoute, } from '../../../const';
import { useAppSelector } from '../../../hooks';
import ProductPageContent from '../../product-page-content/product-page-content';
import Title from '../../title/title';
import { selectCurrentCamera, selectIsCurrentCameraLoading, selectIsSimilarCamerasLoading, selectSimilarCameras } from '../../../store/cameras-process/cameras-process.selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import { selectIsReviewsLoading } from '../../../store/reviews-process/reviews-process.selectors';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ButtonUp from '../../button-up/button-up';
import ModalWrapper from '../../modal/modal-wrapper/modal-wrapper';
import ModalContactMe from '../../modal/modal-contact-me/modal-contact-me';
import { useModalContactMe } from '../../../hooks/use-modal-contact-me';
import { useLoadProductPage } from '../../../hooks/use-load-product-page';

function ProductPage(): JSX.Element {
  const isCurrentCameraLoading = useAppSelector(selectIsCurrentCameraLoading);
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const isSimilarCamerasLoading = useAppSelector(selectIsSimilarCamerasLoading);
  const currentCamera = useAppSelector(selectCurrentCamera);
  const similarCameras = useAppSelector(selectSimilarCameras);

  useLoadProductPage();

  const [
    modalContactMe,
    handleModalContactMeOpen,
    handleModalContactMeClose,
    currentModalCamera
  ] = useModalContactMe({cameras: similarCameras});

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
          <ProductPageContent similarCameras={similarCameras} currentCamera={currentCamera} onModalContactMeOpen={handleModalContactMeOpen}/>
        </div>
        <ModalWrapper onModalClose={handleModalContactMeClose} isActive={modalContactMe.isOpen}>
          <ModalContactMe onModalClose={handleModalContactMeClose} camera={currentModalCamera}/>
        </ModalWrapper>
      </main>
      <ButtonUp/>
    </>
  );
}

export default ProductPage;
