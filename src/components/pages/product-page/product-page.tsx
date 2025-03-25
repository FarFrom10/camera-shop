import { useParams } from 'react-router-dom';
import { AppRoute, ServerConnectionStatusMessage } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import ProductPageContent from '../../product-page-content/product-page-content';
import Title from '../../title/title';
import { getCameraByIdAction, fetchCameraReviewsByIdAction, getSimilarCamerasByIdAction } from '../../../store/api-actions';
import { useEffect } from 'react';
import { selectCurrentCamera, selectIsCurrentCameraLoading, selectIsSimilarCamerasLoading, selectSimilarCameras } from '../../../store/cameras-process/cameras-process.selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import { selectIsReviewsLoading } from '../../../store/reviews-process/reviews-process.selectors';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ButtonUp from '../../button-up/button-up';
import { toast } from 'react-toastify';
import { resetReviews } from '../../../store/reviews-process/reviews-process.slice';
import { resetCurrentCamera, resetSimilarCameras } from '../../../store/cameras-process/cameras-process.slice';
import ModalWrapper from '../../modal/modal-wrapper/modal-wrapper';
import ModalContactMe from '../../modal/modal-contact-me/modal-contact-me';
import { useModalContactMe } from '../../../hooks/use-modal-contact-me';

function ProductPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const isCurrentCameraLoading = useAppSelector(selectIsCurrentCameraLoading);
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const isSimilarCamerasLoading = useAppSelector(selectIsSimilarCamerasLoading);
  const currentCamera = useAppSelector(selectCurrentCamera);
  const similarCameras = useAppSelector(selectSimilarCameras);

  const [
    modalContactMe,
    handleModalContactMeOpen,
    handleModalContactMeClose,
    currentModalCamera
  ] = useModalContactMe({cameras: similarCameras});

  useEffect(()=> {
    if (id) {
      dispatch(getCameraByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus === 'rejected') {
            toast.warn(ServerConnectionStatusMessage.Fail.camera);
          }
        });
    }

    return () => {
      dispatch(resetCurrentCamera());
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (currentCamera !== null && id) {
      dispatch(fetchCameraReviewsByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus === 'rejected') {
            toast.warn(ServerConnectionStatusMessage.Fail.reviews);
          }
        });
    }

    return () => {
      dispatch(resetReviews());
    };
  }, [id, currentCamera, dispatch]);


  useEffect(() => {
    if (currentCamera !== null && id) {
      dispatch(getSimilarCamerasByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus === 'rejected') {
            toast.warn(ServerConnectionStatusMessage.Fail.similarCameras);
          }
        });
    }

    return () => {
      dispatch(resetSimilarCameras());
    };
  }, [id, currentCamera, dispatch]);

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
