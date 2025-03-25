import { useEffect } from 'react';
import { fetchCameraReviewsByIdAction, getCameraByIdAction, getSimilarCamerasByIdAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '.';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ServerConnectionStatusMessage } from '../const';
import { resetCurrentCamera, resetSimilarCameras } from '../store/cameras-process/cameras-process.slice';
import { selectCurrentCamera } from '../store/cameras-process/cameras-process.selectors';
import { resetReviews } from '../store/reviews-process/reviews-process.slice';

export const useLoadProductPage = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
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
};
