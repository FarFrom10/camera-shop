import { useParams } from 'react-router-dom';
import { AppRoute, ServerConnectionStatusMessage } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import ProductPageContent from '../../product-page-content/product-page-content';
import Title from '../../title/title';
import { getCameraByIdAction, fetchCameraReviewsByIdAction } from '../../../store/api-actions';
import { useEffect } from 'react';
import { selectCurrentCamera, selectIsCurrentCameraLoading } from '../../../store/cameras-process/cameras-process.selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import { selectIsReviewsLoading } from '../../../store/reviews-process/reviews-process.selectors';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ButtonUp from '../../button-up/button-up';
import { toast } from 'react-toastify';

function ProductPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const isCurrentCameraLoading = useAppSelector(selectIsCurrentCameraLoading);
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const currentCamera = useAppSelector(selectCurrentCamera);

  useEffect(()=> {
    if (id) {
      dispatch(getCameraByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus === 'rejected') {
            toast.warn(ServerConnectionStatusMessage.Fail.camera);
          }
        });
    }
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
  }, [id, currentCamera, dispatch]);

  if(isCurrentCameraLoading || isReviewsLoading) {
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
          <ProductPageContent camera={currentCamera}/>
        </div>
      </main>
      <ButtonUp/>
    </>
  );
}

export default ProductPage;
