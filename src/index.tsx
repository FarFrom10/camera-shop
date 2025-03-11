import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { toast, ToastContainer } from 'react-toastify';
import { ServerConnectionStatusMessage, TIMEOUT_SHOW_ERROR } from './const';
import { store } from './store';
import { fetchCamerasAction, fetchPromoCamerasAction } from './store/api-actions';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchCamerasAction())
  .then((response) => {
    if (response.meta.requestStatus === 'rejected') {
      toast.warn('Unable to access server');
    }
  });

store.dispatch(fetchPromoCamerasAction())
  .then((response) => {
    if (response.meta.requestStatus === 'rejected') {
      toast.warn(ServerConnectionStatusMessage.Fail);
    }
  });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={TIMEOUT_SHOW_ERROR}/>
      <App/>
    </Provider>
  </React.StrictMode>
);
