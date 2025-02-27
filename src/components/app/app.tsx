import { HelmetProvider } from 'react-helmet-async';
import CatalogPage from '../pages/catalog-page/catalog-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import ProductPage from '../pages/product-page/product-page';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Index} element={<Layout/>}>
            <Route path={AppRoute.Index}>
              <Route index element={<CatalogPage/>}/>
              <Route
                path={AppRoute.Product}
                element={<ProductPage/>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
