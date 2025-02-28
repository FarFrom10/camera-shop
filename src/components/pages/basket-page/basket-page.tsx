import { AppRoute } from '../../../const';
import BasketPageContent from '../../basket-page-content/basket-page-content';
import Title from '../../title/title';

function BasketPage(): JSX.Element {
  return (
    <>
      <Title pageName={AppRoute.Basket}/>
      <BasketPageContent/>
    </>
  );
}

export default BasketPage;
