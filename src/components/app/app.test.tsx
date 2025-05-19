import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import App from './app';
import { createMemoryHistory, MemoryHistory } from 'history';
import { AppRoute, DEFAULT_PRODUCT_TAB } from '../../const';
import { makeFakeStore } from '../../utils/mocks';
import { generatePath } from 'react-router-dom';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "Catalog" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Index);

    render(withStoreComponent);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render "Product" when user navigate to "/product/:id/*"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(`${generatePath(AppRoute.Product, {id: String(fakeCurrentCamera.id)})}/${DEFAULT_PRODUCT_TAB}`);

    render(withStoreComponent);

    expect(screen.getByText(/Характеристики/i)).toBeInTheDocument();
    expect(screen.getByText(/Описание/i)).toBeInTheDocument();
  });

  it('should render "Basket" when user navigate to "/card"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Basket);

    render(withStoreComponent);

    expect(screen.getByText(/Оформить заказ/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText(/404: Страница не найдена/i)).toBeInTheDocument();
    expect(screen.getByText(/Перейти на главную страницу/i)).toBeInTheDocument();
  });
});
