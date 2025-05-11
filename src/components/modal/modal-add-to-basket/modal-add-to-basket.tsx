import {memo} from 'react';
import { ButtonText, ServerConnectionStatusMessage } from '../../../const';
import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';
import CommonButton from '../../common-button/common-button';
import { useAppDispatch } from '../../../hooks';
import { addCamera } from '../../../store/basket-process/basket-process.slice';

type ModalAddToBasketProps ={
  camera: CameraData | null;
  onModalClose: () => void;
}

function ModalAddToBasketTemplate({camera, onModalClose}: ModalAddToBasketProps): JSX.Element {
  const dispatch = useAppDispatch();

  if (camera === null) {
    return (
      <p className="title title--h4">{ServerConnectionStatusMessage.Fail.camera}</p>
    );
  }

  const handleButtonClick = () => {
    dispatch(addCamera(camera));
    onModalClose();
  };

  return(
    <>
      <p className="title title--h4">Добавить товар в корзину</p>
      {camera !== null && <BasketItemMini camera={camera}/>}
      <div className="modal__buttons">
        <CommonButton
          buttonText={ButtonText.AddToCart}
          onButtonClick={handleButtonClick}
          isAddToCart
          isModal
          isFitWidth
        />
      </div>
    </>
  );
}

const ModalAddToBasket = memo(ModalAddToBasketTemplate);

export default ModalAddToBasket;
