import { memo } from 'react';
import cn from 'classnames';

type FormFieldWrapperProps = {
  children: JSX.Element;
  isTextarea?: boolean;
  error: string | undefined;
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
      {error && <p className="custom-input__error">{error}</p>}
    </div>
  );
}

const FormFieldWrapper = memo(FormFieldtWrapperTemplate);

export default FormFieldWrapper;
