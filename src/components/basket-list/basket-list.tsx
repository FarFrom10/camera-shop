import { nanoid } from '@reduxjs/toolkit';
import { TemporaryNumbers } from '../../const';
import BasketItem from '../basket-item/basket-item';

function BasketList(): JSX.Element {
  const basketList = Array.from({length: TemporaryNumbers.BasketList}).map(() => <BasketItem key={nanoid()}/>);
  return(
    <ul className="basket__list">
      {basketList}
    </ul>
  );
}

export default BasketList;
