import { ButtonText, IconName, ModalTitle } from '../../../const';
import ButtonMoreDetails from '../../button-more-details/button-more-details';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';

type ModalBasketSuccessProps = {
  onModalClose: () => void;
  onNavigateToCatalog?: () => void;
  titleText: ModalTitle;
  isSingleButton?: boolean;
}

function ModalBasketSuccess({ onModalClose, onNavigateToCatalog, isSingleButton = false, titleText }: ModalBasketSuccessProps){
  const buttonText = isSingleButton ? ButtonText.GoToCatalog : ButtonText.GoToCart;
  const iconClass = isSingleButton ? IconName.Thanks : IconName.Success;

  return(
    <>
      <p className="title title--h4">{titleText}</p>
      <CommonIcon icon={iconClass} iconClass='modal__icon'/>
      <div className="modal__buttons">
        {!isSingleButton && <ButtonMoreDetails onButtonClick={onModalClose} isModal />}
        <CommonButton
          onButtonClick={onNavigateToCatalog && onNavigateToCatalog}
          buttonText={buttonText}
          isGoToCart={!isSingleButton}
          isModal
          isFitWidth
        />
      </div>
    </>
  );
}

export default ModalBasketSuccess;
