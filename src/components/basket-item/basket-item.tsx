import { BusketAmount, ButtonQuantityDirection, CommonPictureCategory, CommonPictureClass, IconName, PriceClass, Temporary } from '../../const';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import BasketQuantityButton from '../basket-quantity-button/basket-quantity-button';
import CommonIcon from '../common-icon/common-icon';
import ProductPrice from '../product-price/product-price';
import CommonPicture from '../common-picture/common-picture';
import { BasketCameraData } from '../../types/cameras';

type BasketItemProps = {
  camera: BasketCameraData;
  onIncreaseAmount: (vendorCode: string) => void;
  onDecreaseAmount: (vendorCode: string) => void;
}

function BasketItem({camera, onIncreaseAmount, onDecreaseAmount}: BasketItemProps): JSX.Element {
  const {
    amount,
    id,
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
  } = camera;
  const totalPrice = Temporary.Numbers.price * amount;

  const decreaseAmount = () => {
    if (amount === BusketAmount.Min) {
      return;
    }
    onDecreaseAmount(camera.vendorCode);
  };

  const increaseAmount = () => {
    if (amount === BusketAmount.Max) {
      return;
    }
    onIncreaseAmount(camera.vendorCode);
  };

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
