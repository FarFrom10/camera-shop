import { ButtonQuantityDirection, CommonPictureCategory, CommonPictureClass, IconName, PriceClass } from '../../const';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import BasketQuantityButton from '../basket-quantity-button/basket-quantity-button';
import CommonIcon from '../common-icon/common-icon';
import ProductPrice from '../product-price/product-price';
import CommonPicture from '../common-picture/common-picture';
import { BasketItemData } from '../../types/cameras';
import { useProductAmount } from '../../hooks/use-product-amount';
import { memo, useCallback, useMemo } from 'react';

type BasketItemProps = {
  camera: BasketItemData;
  onAmountChange: (id: number, amount: number) => void;
  onModalOpen: (id: number | null) => void;
  isBasketLoading: boolean;
}

function BasketItemTemplate({camera, onAmountChange, onModalOpen, isBasketLoading}: BasketItemProps): JSX.Element {
  const {
    amount,
    id,
    name,
    price,
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
  } = useProductAmount({ camera, onAmountChange});

  const handleButtonClick = useCallback(() => onModalOpen(id), [onModalOpen, id]);

  const totalPrice = useMemo(() => price * amount, [price, amount]);

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
      <ProductPrice priceClass={PriceClass.BasketItem} price={price}/>
      <div className="quantity">
        <BasketQuantityButton
          isDisabled={isBasketLoading}
          onButtonClick={handleAmountDecrease}
        />
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          type="number"
          id="counter1"
          value={currentAmount}
          onChange={handleAmountChange}
          aria-label="количество товара"
        />
        <BasketQuantityButton
          isDisabled={isBasketLoading}
          onButtonClick={handleAmountIncrease}
          direction={ButtonQuantityDirection.Next}
        />
      </div>
      <ProductPrice priceClass={PriceClass.BasketItemTotal} price={totalPrice}/>
      <button
        data-testid='basketItemRemoveButton'
        disabled={isBasketLoading}
        onClick={handleButtonClick}
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
      >
        <CommonIcon icon={IconName.Close}/>
      </button>
    </li>
  );
}

const BasketItem = memo(BasketItemTemplate);

export default BasketItem;
