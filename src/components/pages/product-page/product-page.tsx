import { useParams } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import ProductPageContent from '../../product-page-content/product-page-content';
import Title from '../../title/title';
import { fetchCameraByIdAction, fetchCameraReviewsByIdAction } from '../../../store/api-actions';
import { useEffect } from 'react';
import { selectCurrentCamera, selectIsCurrentCameraLoading } from '../../../store/cameras-process/cameras-process.selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import { selectIsReviewsLoading } from '../../../store/reviews-process/reviews-process.selectors';

function ProductPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const isCurrentCameraLoading = useAppSelector(selectIsCurrentCameraLoading);
  const isReviewsLoading = useAppSelector(selectIsReviewsLoading);
  const currentCamera = useAppSelector(selectCurrentCamera);

  useEffect(()=> {
    if (id) {
      dispatch(fetchCameraByIdAction(id))
        .then((response) => {
          if(response.meta.requestStatus === 'fulfilled') {
            dispatch(fetchCameraReviewsByIdAction(id));
          }
        });
    }
  }, [id, dispatch]);

  if(isCurrentCameraLoading || isReviewsLoading) {
    return <LoadingScreen/>;
  }

  if(!currentCamera) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <Title pageName={AppRoute.Product}/>
      <ProductPageContent camera={currentCamera}/>
    </>
  );
}

export default ProductPage;
