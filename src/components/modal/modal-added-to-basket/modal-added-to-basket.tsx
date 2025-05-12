import { ButtonText, IconName } from '../../../const';
import ButtonMoreDetails from '../../button-more-details/button-more-details';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';

type ModalAddedToBasketProps = {
  onModalClose: () => void;
}

function ModalAddedToBasket({ onModalClose }: ModalAddedToBasketProps){
  return(
    <>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <CommonIcon icon={IconName.Success} iconClass='modal__icon'/>
      <div className="modal__buttons">
        <ButtonMoreDetails onButtonClick={onModalClose} isModal />
        {/* <button className="btn btn--purple modal__btn modal__btn--fit-width">
      Перейти в корзину
        </button> */}
        <CommonButton buttonText={ButtonText.GoToCart} isGoToCart isModal isFitWidth/>
      </div>
    </>
  );
}

export default ModalAddedToBasket;
