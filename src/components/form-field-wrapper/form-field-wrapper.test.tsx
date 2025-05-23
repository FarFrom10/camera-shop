import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import FormFieldWrapper from './form-field-wrapper';
import { InputValidationErrorMessage } from '../../const';

describe('Component: FormFieldWrapper', () => {
  const containerId = 'FormFieldWrapper';
  const fakeChildrenId = 'fakeChildren';
  const fakeChildren = <div data-testid={fakeChildrenId}></div>;

  it('should render correctly', () => {
    render(withRouter(
      <FormFieldWrapper isError={false} errorMessage={InputValidationErrorMessage.Phone}>
        {fakeChildren}
      </FormFieldWrapper>));
    const errorElement = screen.getByText(InputValidationErrorMessage.Phone);

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(fakeChildrenId)).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveStyle('opacity: 0');
  });

  it('should render correctly with error', () => {
    render(withRouter(
      <FormFieldWrapper isError errorMessage={InputValidationErrorMessage.Phone}>
        {fakeChildren}
      </FormFieldWrapper>));
    const errorElement = screen.getByText(InputValidationErrorMessage.Phone);

    expect(screen.getByTestId(containerId)).toHaveClass('is-invalid');
    expect(errorElement).toHaveStyle('opacity: 1');
  });
});
