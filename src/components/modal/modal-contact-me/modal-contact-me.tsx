import { ChangeEvent, useState } from 'react';
import { ButtonText, IconName, InputValidationErrorMessage, PHONE_NUMBER_START, PhoneMaxLength } from '../../../const';
import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';
import { formatPhoneNumber, getOnlyNumbersFromString } from '../../../utils/common';
import FormInputWrapper from '../../form-input-wrapper/form-input-wrapper';

type ModalContactMeProps ={
  camera: CameraData | null;
}

function ModalContactMe({camera}: ModalContactMeProps): JSX.Element {
  const [phone, setPhone] = useState<string>(PHONE_NUMBER_START);
  const [showError, setShowError] = useState<boolean>(false);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const phoneNumbers = getOnlyNumbersFromString(evt.target.value);
    const formattedPhoneNumber = formatPhoneNumber(evt.target.value);

    setPhone(formattedPhoneNumber);
    setShowError(phoneNumbers.length < PhoneMaxLength.Numbers);
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
      <FormInputWrapper isError={showError} errorMessage={InputValidationErrorMessage.Phone}>
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
            maxLength={PhoneMaxLength.InputValue}
            required
          />
        </label>
      </FormInputWrapper>
      <div className="modal__buttons">
        <CommonButton buttonText={ButtonText.Order} isAddToCart isModal isFitWidth/>
      </div>
    </>
  );
}

export default ModalContactMe;
