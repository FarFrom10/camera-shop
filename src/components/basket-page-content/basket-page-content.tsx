import { useAppSelector } from '../../hooks';
import { selectBasketItems } from '../../store/basket-process/basket-process.selectors';
import BasketList from '../basket-list/basket-list';
import BasketSummary from '../basket-summary/basket-summary';

type BasketPageContentProps = {
  isBasketLoading: boolean;
}

function BasketPageContent({ isBasketLoading }: BasketPageContentProps): JSX.Element {
  const basketItems = useAppSelector(selectBasketItems);

  return (
    <section data-testid='basketPageContent' className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <BasketList isBasketLoading={isBasketLoading} cameras={basketItems}/>
        <BasketSummary isBasketLoading={isBasketLoading} cameras={basketItems}/>
      </div>
    </section>
  );
}

export default BasketPageContent;
