import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppSelector } from '../../hooks';
import { selectIsCamerasLoading, selectIsPromoCamerasLoading } from '../../store/cameras-process/cameras-process.selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import BasketPage from '../../pages/basket-page/basket-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  const isCamerasLoading = useAppSelector(selectIsCamerasLoading);
  const isPromoCamerasLoading = useAppSelector(selectIsPromoCamerasLoading);

  if(isCamerasLoading || isPromoCamerasLoading) {
    return <LoadingScreen/>;
  }

  return (
    <HelmetProvider>
      <ScrollToTop>
        <Routes>
          <Route path={AppRoute.Index} element={<Layout/>}>
            <Route path={AppRoute.Index}>
              <Route index element={<CatalogPage/>}/>
              <Route
                path={`${AppRoute.Product}/*`}
                element={<ProductPage/>}
              />
              <Route
                path={AppRoute.Basket}
                element={<BasketPage/>}
              />
            </Route>
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundPage/>}
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </HelmetProvider>
  );
}

export default App;
