import BasketPageContent from '../../components/basket-page-content/basket-page-content';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';

//Страница корзины не является завершенной, я лишь декомпозировал её

function BasketPage(): JSX.Element {
  return (
    <main>
      <div className="page-content">
        <Title pageName={AppRoute.Basket}/>
        <Breadcrumbs/>
        <BasketPageContent/>
      </div>
    </main>
  );
}

export default BasketPage;
