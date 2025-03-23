import { nanoid } from '@reduxjs/toolkit';
import { Temporary } from '../../const';
import BasketItem from '../basket-item/basket-item';

function BasketList(): JSX.Element {
  const basketList = Array.from({length: Temporary.Numbers.basketList}).map(() => <BasketItem key={nanoid()}/>);

  return(
    <ul data-testid='basketList' className="basket__list">
      {basketList}
    </ul>
  );
}

export default BasketList;
