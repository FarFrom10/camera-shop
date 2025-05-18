import { ButtonText, ModalTitle, ServerConnectionStatusMessage } from '../../../const';
import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';
import ButtonMoreDetails from '../../button-more-details/button-more-details';
import CommonButton from '../../common-button/common-button';

type ModalRemoveItemProps ={
  camera: CameraData | null;
  onModalClose: () => void;
  onProductRemove: () => void;
}

function ModalRemoveItem({ camera, onModalClose, onProductRemove }: ModalRemoveItemProps): JSX.Element {
  if (camera === null) {
    return (
      <p className="title title--h4">{ServerConnectionStatusMessage.Fail.camera}</p>
    );
  }

  return(
    <>
      <p className="title title--h4">{ModalTitle.RemoveItemConfirm}</p>
      {camera !== null && <BasketItemMini shouldDisplayPrice={false} camera={camera}/>}
      <div className="modal__buttons">
        <CommonButton onButtonClick={onProductRemove} buttonText={ButtonText.Remove} isModal isHalfWidth/>
        <ButtonMoreDetails onButtonClick={onModalClose} isModal isHalfWidth />
      </div>
    </>
  );
}

export default ModalRemoveItem;
