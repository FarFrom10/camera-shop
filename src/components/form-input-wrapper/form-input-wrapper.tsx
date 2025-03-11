import { InputValidationErrorMessage } from '../../const';

type FormInputWrapperProps = {
  children: JSX.Element;
  isError: boolean;
  errorMessage: InputValidationErrorMessage;
}

function FormInputWrapper({children, isError, errorMessage}: FormInputWrapperProps): JSX.Element {
  return (
    <div className={`custom-input form-review__item ${isError ? 'is-invalid' : ''}`}>
      {children}
      <p style={{opacity: isError ? '1' : '0'}} className="custom-input__error">{errorMessage}</p>
    </div>
  );
}

export default FormInputWrapper;
