import { ChangeEvent, useState } from 'react';
import { ButtonText, IconName, InputValidationErrorMessage, PHONE_NUMBER_START, PhoneMaxLength, ServerConnectionStatusMessage } from '../../../const';
import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';
import CommonButton from '../../common-button/common-button';
import CommonIcon from '../../common-icon/common-icon';
import { formatPhoneNumber, getOnlyNumbersFromString } from '../../../utils/common';
import FormInputWrapper from '../../form-input-wrapper/form-input-wrapper';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { postContactMeDataAction } from '../../../store/api-actions';
import { selectIsContactMeDataLoading } from '../../../store/user-process/user-process.selectors';
import { toast } from 'react-toastify';

type ModalContactMeProps ={
  camera: CameraData | null;
  onModalClose: () => void;
}

function ModalContactMe({camera, onModalClose}: ModalContactMeProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState<string>(PHONE_NUMBER_START);
  const [showError, setShowError] = useState<boolean>(false);
  const isContactMeDataLoading = useAppSelector(selectIsContactMeDataLoading);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const phoneNumbers = getOnlyNumbersFromString(evt.target.value);
    const formattedPhoneNumber = formatPhoneNumber(evt.target.value);

    setPhone(formattedPhoneNumber);
    setShowError(phoneNumbers.length < PhoneMaxLength.Numbers);
  };

  const handleButtonClick = () => {
    if (showError || camera === null) {
      return;
    }

    dispatch(postContactMeDataAction({
      camerasIds:[camera.id],
      coupon: null,
      tel: `+${getOnlyNumbersFromString(phone)}`,
    }))
      .then((response) => {
        if (response.meta.requestStatus === 'rejected') {
          toast.warn(ServerConnectionStatusMessage.Fail.common);
        } else {
          onModalClose();
          toast.success(ServerConnectionStatusMessage.Success.contactMe);
        }
      });
  };

  if (camera === null) {
    return (
      <p className="title title--h4">{ServerConnectionStatusMessage.Fail.camera}</p>
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
            data-testid='modalContactMePhone'
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
        <CommonButton
          isDisabled={isContactMeDataLoading}
          onButtonClick={handleButtonClick}
          buttonText={ButtonText.Order}
          isAddToCart
          isModal
          isFitWidth
        />
      </div>
    </>
  );
}

export default ModalContactMe;
