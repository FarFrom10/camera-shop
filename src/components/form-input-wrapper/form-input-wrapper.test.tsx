import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import FormInputWrapper from './form-input-wrapper';
import { InputValidationErrorMessage } from '../../const';

describe('Component: FormInputWrapper', () => {
  const containerId = 'formInputWrapper';
  const fakeChildrenId = 'fakeChildren';
  const fakeChildren = <div data-testid={fakeChildrenId}>children</div>;

  it('should render correctly', () => {
    render(withRouter(
      <FormInputWrapper isError={false} errorMessage={InputValidationErrorMessage.Phone}>
        {fakeChildren}
      </FormInputWrapper>));
    const errorElement = screen.getByText(InputValidationErrorMessage.Phone);

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(fakeChildrenId)).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveStyle('opacity: 0');
  });

  it('should render correctly with error', () => {
    render(withRouter(
      <FormInputWrapper isError errorMessage={InputValidationErrorMessage.Phone}>
        {fakeChildren}
      </FormInputWrapper>));
    const errorElement = screen.getByText(InputValidationErrorMessage.Phone);

    expect(screen.getByTestId(containerId)).toHaveClass('is-invalid');
    expect(errorElement).toHaveStyle('opacity: 1');
  });
});
