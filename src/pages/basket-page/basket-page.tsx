import BasketPageContent from '../../components/basket-page-content/basket-page-content';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Title from '../../components/title/title';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectIsBasketLoading, selectIsPromoCodeLoading } from '../../store/basket-process/basket-process.selectors';

function BasketPage(): JSX.Element {
  const isBasketLoading = useAppSelector(selectIsBasketLoading);
  const isPromoCodeLoading = useAppSelector(selectIsPromoCodeLoading);
  const isLoading = isBasketLoading || isPromoCodeLoading;


  return (
    <main>
      <div data-testid='basketPage' className="page-content">
        <Title pageName={AppRoute.Basket}/>
        <Breadcrumbs/>
        <BasketPageContent isBasketLoading={isBasketLoading}/>

        {isLoading && <LoadingScreen/>}
      </div>
    </main>
  );
}

export default BasketPage;
