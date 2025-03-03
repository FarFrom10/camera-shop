import { useState } from 'react';
import { BusketAmount, ButtonQuantityDirection, IconName, ItemImageCategory, PriceClass, TemporaryNumbers } from '../../const';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import BasketQuantityButton from '../basket-quantity-button/basket-quantity-button';
import CommonIcon from '../common-icon/common-icon';
import CommonItemImage from '../common-item-image/common-item-image';
import ProductPrice from '../product-price/product-price';

function BasketItem(): JSX.Element {
  const [amount, setAmount] = useState<number>(1);
  const totalPrice = TemporaryNumbers.price * amount;

  const decreaseAmount = () => {
    if (amount === BusketAmount.Min) {
      return;
    }
    setAmount((prev) => --prev);
  };

  const increaseAmount = () => {
    if (amount === BusketAmount.Max) {
      return;
    }
    setAmount((prev) => ++prev);
  };

  return (
    <li className="basket-item">
      <CommonItemImage category={ItemImageCategory.BasketItem}/>
      <BasketItemDescription/>
      <ProductPrice priceClass={PriceClass.BasketItem} price={TemporaryNumbers.price}/>
      <div className="quantity">
        <BasketQuantityButton onButtonClick={decreaseAmount}/>
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          type="number"
          id="counter1"
          readOnly
          value={amount}
          aria-label="количество товара"
        />
        <BasketQuantityButton onButtonClick={increaseAmount} direction={ButtonQuantityDirection.Next}/>
      </div>
      <ProductPrice priceClass={PriceClass.BasketItemTotal} price={totalPrice}/>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
      >
        <CommonIcon icon={IconName.Close}/>
      </button>
    </li>
  );
}

export default BasketItem;
