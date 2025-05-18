import { ButtonText, IconName, ModalTitle } from '../../../const';
import ButtonMoreDetails from '../../button-more-details/button-more-details';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';

type ModalBasketSuccessProps = {
  onModalClose: () => void;
  onNavigateToCatalog?: () => void;
  isOrder?: boolean;
}

function ModalBasketSuccess({ onModalClose, onNavigateToCatalog, isOrder = false }: ModalBasketSuccessProps){
  const buttonText = isOrder ? ButtonText.GoToCatalog : ButtonText.GoToCart;
  const iconClass = isOrder ? IconName.Thanks : IconName.Success;
  const titleText = isOrder ? ModalTitle.SuccessfullyOrdered : ModalTitle.SuccessfullyAdded;

  return(
    <>
      <p className="title title--h4">{titleText}</p>
      <CommonIcon icon={iconClass} iconClass='modal__icon'/>
      <div className="modal__buttons">
        {!isOrder && <ButtonMoreDetails onButtonClick={onModalClose} isModal />}
        <CommonButton
          onButtonClick={onNavigateToCatalog && onNavigateToCatalog}
          buttonText={buttonText}
          isGoToCart={!isOrder}
          isModal
          isFitWidth
        />
      </div>
    </>
  );
}

export default ModalBasketSuccess;
