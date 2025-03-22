import { memo } from 'react';
import { InputValidationErrorMessage } from '../../const';

type FormInputWrapperProps = {
  children: JSX.Element;
  isError: boolean;
  errorMessage: InputValidationErrorMessage;
}

function FormInputWrapperTemplate({children, isError, errorMessage}: FormInputWrapperProps): JSX.Element {
  return (
    <div data-testid='formInputWrapper' className={`custom-input form-review__item ${isError ? 'is-invalid' : ''}`}>
      {children}
      <p style={{opacity: isError ? '1' : '0'}} className="custom-input__error">{errorMessage}</p>
    </div>
  );
}

const FormInputWrapper = memo(FormInputWrapperTemplate);

export default FormInputWrapper;
