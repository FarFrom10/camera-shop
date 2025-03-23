import { AppRoute } from '../../../const';
import BasketPageContent from '../../basket-page-content/basket-page-content';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Title from '../../title/title';

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
