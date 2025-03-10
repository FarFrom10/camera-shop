import { ButtonText, IconName } from '../../../const';
import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';

type ModalContactMeProps ={
  camera: CameraData | null;
}

function ModalContactMe({camera}: ModalContactMeProps): JSX.Element {
  return(
    <>
      <p className="title title--h4">Свяжитесь со мной</p>
      {camera !== null && <BasketItemMini camera={camera}/>}
      <div className="custom-input form-review__item">
        <label>
          <span className="custom-input__label">
      Телефон
            <CommonIcon icon={IconName.Snowflake}/>
          </span>
          <input
            type="tel"
            name="user-tel"
            placeholder="Введите ваш номер"
            required
          />
        </label>
        <p className="custom-input__error">Нужно указать номер</p>
      </div>
      <div className="modal__buttons">
        <CommonButton buttonText={ButtonText.Order} isAddToCart isModal isFitWidth/>
      </div>
    </>
  );
}

export default ModalContactMe;
