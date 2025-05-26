import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import FormFieldWrapper from './form-field-wrapper';

describe('Component: FormFieldWrapper', () => {
  const containerId = 'FormFieldWrapper';
  const fakeChildrenId = 'fakeChildren';
  const fakeChildren = <div data-testid={fakeChildrenId}></div>;
  const fakeError = 'some error message';

  it('should render correctly', () => {
    render(withRouter(
      <FormFieldWrapper error={undefined}>
        {fakeChildren}
      </FormFieldWrapper>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId)).toHaveClass('custom-input');
    expect(screen.getByTestId(fakeChildrenId)).toBeInTheDocument();
    expect(screen.queryByText(fakeError)).not.toBeInTheDocument();
  });

  it('should render correctly with error', () => {
    render(withRouter(
      <FormFieldWrapper error={fakeError}>
        {fakeChildren}
      </FormFieldWrapper>));

    expect(screen.getByTestId(containerId)).toHaveClass('is-invalid');
    expect(screen.getByText(fakeError)).toBeInTheDocument();
  });

  it('should have "custom-textarea" class with "isTextarea" prop', () => {
    render(withRouter(
      <FormFieldWrapper error={undefined} isTextarea>
        {fakeChildren}
      </FormFieldWrapper>));
    const containerElement = screen.getByTestId(containerId);

    expect(containerElement).toHaveClass('custom-textarea');
    expect(containerElement).not.toHaveClass('custom-input');
  });
});
