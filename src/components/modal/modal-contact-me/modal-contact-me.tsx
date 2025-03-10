import { ChangeEvent, useState } from 'react';
import { ButtonText, IconName } from '../../../const';
import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';
import { formatPhoneNumber } from '../../../utils/common';

type ModalContactMeProps ={
  camera: CameraData | null;
}

function ModalContactMe({camera}: ModalContactMeProps): JSX.Element {
  const [phone, setPhone] = useState<string>('+7');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(evt.target.value);
    setPhone(formattedPhoneNumber);
  };

  if (camera === null) {
    return (
      <p className="title title--h4">Произошла ошибка: камера не найдена</p>
    );
  }

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
            tabIndex={0}
            value={phone}
            onChange={(evt) => handleInputChange(evt)}
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
