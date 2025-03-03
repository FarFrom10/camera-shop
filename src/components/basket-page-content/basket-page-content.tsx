import BasketList from '../basket-list/basket-list';
import BasketSummary from '../basket-summary/basket-summary';

function BasketPageContent(): JSX.Element {
  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <BasketList/>
        <BasketSummary/>
      </div>
    </section>
  );
}

export default BasketPageContent;
