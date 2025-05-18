import BasketPageContent from '../../components/basket-page-content/basket-page-content';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectIsBasketLoading } from '../../store/basket-process/basket-process.selectors';

function BasketPage(): JSX.Element {
  const isBasketLoading = useAppSelector(selectIsBasketLoading);

  return (
    <main>
      <div className="page-content">
        <Title pageName={AppRoute.Basket}/>
        <Breadcrumbs/>
        <BasketPageContent isBasketLoading={isBasketLoading}/>

        {isBasketLoading && <LoadingScreen/>}
      </div>
    </main>
  );
}

export default BasketPage;
