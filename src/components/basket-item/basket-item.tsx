import { ButtonQuantityDirection, CommonPictureCategory, CommonPictureClass, IconName, PriceClass, Temporary } from '../../const';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import BasketQuantityButton from '../basket-quantity-button/basket-quantity-button';
import CommonIcon from '../common-icon/common-icon';
import ProductPrice from '../product-price/product-price';
import CommonPicture from '../common-picture/common-picture';
import { BasketCameraData } from '../../types/cameras';
import { useRef } from 'react';
import { useProductAmount } from '../../hooks/use-product-amount';

type BasketItemProps = {
  camera: BasketCameraData;
  onAmountChange: (vendorCode: string, amount: number) => void;
}

function BasketItem({camera, onAmountChange}: BasketItemProps): JSX.Element {
  const inputAmount = useRef<HTMLInputElement>(null);

  const {
    amount,
    id,
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
  } = camera;

  const {
    handleAmountDecrease,
    handleAmountIncrease,
    handleAmountChange,
    currentAmount
  } = useProductAmount({inputAmount, camera, onAmountChange});

  const totalPrice = Temporary.Numbers.price * amount;

  return (
    <li data-testid='basketItem' className="basket-item">
      <CommonPicture
        name={name}
        id={String(id)}
        img={previewImg}
        img2x={previewImg2x}
        webp={previewImgWebp}
        webp2x={previewImgWebp2x}
        category={CommonPictureCategory.BasketItem}
        imageClass={CommonPictureClass.Basket}
      />
      <BasketItemDescription camera={camera}/>
      <ProductPrice priceClass={PriceClass.BasketItem} price={Temporary.Numbers.price}/>
      <div className="quantity">
        <BasketQuantityButton onButtonClick={handleAmountDecrease}/>
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          ref={inputAmount}
          type="number"
          id="counter1"
          onBlur={handleAmountChange}
          defaultValue={currentAmount}
          aria-label="количество товара"
        />
        <BasketQuantityButton onButtonClick={handleAmountIncrease} direction={ButtonQuantityDirection.Next}/>
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
