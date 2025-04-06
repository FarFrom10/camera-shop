import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ButtonUp from '../../components/button-up/button-up';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import ModalContactMe from '../../components/modal/modal-contact-me/modal-contact-me';
import ModalWrapper from '../../components/modal/modal-wrapper/modal-wrapper';
import ProductPageContent from '../../components/product-page-content/product-page-content';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { useLoadProductPage } from '../../hooks/use-load-product-page';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';
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
