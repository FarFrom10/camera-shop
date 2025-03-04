import { useParams } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import ProductPageContent from '../../product-page-content/product-page-content';
import Title from '../../title/title';
import { fetchCameraByIdAction } from '../../../store/api-actions';
import { useEffect } from 'react';
import { selectCurrentCamera, selectIsCurrentCameraLoading } from '../../../store/cameras-process/cameras-process.selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';

function ProductPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isCurrentCameraLoading = useAppSelector(selectIsCurrentCameraLoading);
  const currentCamera = useAppSelector(selectCurrentCamera);

  useEffect(()=> {
    if (id) {
      dispatch(fetchCameraByIdAction(id));
    }
  }, [id, dispatch]);

  if(isCurrentCameraLoading) {
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
