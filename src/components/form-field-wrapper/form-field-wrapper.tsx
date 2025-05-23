import { memo } from 'react';
import { FieldError } from 'react-hook-form';
import cn from 'classnames';

type FormFieldWrapperProps = {
  children: JSX.Element;
  isTextarea?: boolean;
  error: FieldError | undefined;
}

function FormFieldtWrapperTemplate({children, isTextarea = false, error}: FormFieldWrapperProps): JSX.Element {
  return (
    <div data-testid='FormFieldWrapper' className={cn(
      {'custom-input': !isTextarea},
      {'custom-textarea': isTextarea},
      'form-review__item',
      {'is-invalid': error}
    )}
    >
      {children}
      {error && <p className="custom-input__error">{error.message}</p>}
    </div>
  );
}

const FormFieldWrapper = memo(FormFieldtWrapperTemplate);

export default FormFieldWrapper;
