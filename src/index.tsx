import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { toast, ToastContainer } from 'react-toastify';
import { TIMEOUT_SHOW_ERROR } from './const';
import { store } from './store';
import { fetchCamerasAction } from './store/api-actions';
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

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={TIMEOUT_SHOW_ERROR}/>
      <App/>
    </Provider>
  </React.StrictMode>
);
