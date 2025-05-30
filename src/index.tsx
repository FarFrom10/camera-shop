import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { toast, ToastContainer } from 'react-toastify';
import { ServerConnectionStatusMessage, TIMEOUT_SHOW_ERROR } from './const';
import { store } from './store';
import { fetchCamerasAction, fetchPromoCamerasAction } from './store/api-actions';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchCamerasAction())
  .then((response) => {
    if (response.meta.requestStatus === 'rejected') {
      toast.warn(ServerConnectionStatusMessage.Fail.common);
    }
  });

store.dispatch(fetchPromoCamerasAction())
  .then((response) => {
    if (response.meta.requestStatus === 'rejected') {
      toast.warn(ServerConnectionStatusMessage.Fail.common);
    }
  });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer autoClose={TIMEOUT_SHOW_ERROR}/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
