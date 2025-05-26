import { render, screen } from '@testing-library/react';
import ReviewFormRating from './review-form-rating';
import { makeFakeStore } from '../../utils/mocks';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';

describe('Component: ReviewFormRating', () => {
  const containerId = 'reviewFormRating';
  const fakeErrorMessage = 'some error message';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ReviewFormRating
        onChangeRating={mockEmptyCallback}
        rating={3}
        error={undefined}
        isDisabled={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should display rating "0" if rating prop is "null"', () => {
    const {withStoreComponent} = withStore(
      <ReviewFormRating
        onChangeRating={mockEmptyCallback}
        rating={null}
        error={undefined}
        isDisabled={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should display error message if "error" prop is not "undefined"', () => {
    const {withStoreComponent} = withStore(
      <ReviewFormRating
        onChangeRating={mockEmptyCallback}
        rating={null}
        error={fakeErrorMessage}
        isDisabled={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(fakeErrorMessage)).toBeInTheDocument();
  });
});
