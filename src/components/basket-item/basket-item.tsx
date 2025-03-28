import { useState } from 'react';
import { BusketAmount, ButtonQuantityDirection, CommonPictureCategory, CommonPictureClass, IconName, PriceClass, Temporary } from '../../const';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import BasketQuantityButton from '../basket-quantity-button/basket-quantity-button';
import CommonIcon from '../common-icon/common-icon';
import ProductPrice from '../product-price/product-price';
import CommonPicture from '../common-picture/common-picture';

function BasketItem(): JSX.Element {
  const [amount, setAmount] = useState<number>(1);
  const totalPrice = Temporary.Numbers.price * amount;

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
    <li data-testid='basketItem' className="basket-item">
      <CommonPicture category={CommonPictureCategory.BasketItem} imageClass={CommonPictureClass.Basket}/>
      <BasketItemDescription/>
      <ProductPrice priceClass={PriceClass.BasketItem} price={Temporary.Numbers.price}/>
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
