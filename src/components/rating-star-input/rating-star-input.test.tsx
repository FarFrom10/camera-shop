import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../utils/mocks';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import RatingStarInput from './rating-star-input';
import { ratingNames } from '../../const';
import userEvent from '@testing-library/user-event';
import * as mockComponent from '../../utils/mock-component';

describe('Component: RatingStarInput', () => {
  const starId = 'ratingStarInput';
  const fakeValue = 1;

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <RatingStarInput
        starNumber={fakeValue}
        grade={ratingNames[fakeValue]}
        onChangeRating={mockEmptyCallback}
        isDisabled={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(starId)).toBeInTheDocument();
  });

  it('input element should be checked after click on it', async () => {
    const {withStoreComponent} = withStore(
      <RatingStarInput
        starNumber={fakeValue}
        grade={ratingNames[fakeValue]}
        onChangeRating={mockEmptyCallback}
        isDisabled={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const inputElement = screen.getByTestId(starId);
    await userEvent.click(inputElement);

    expect(inputElement).toBeChecked();
  });

  it('input element should fire callback after click on it', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');
    const {withStoreComponent} = withStore(
      <RatingStarInput
        starNumber={fakeValue}
        grade={ratingNames[fakeValue]}
        onChangeRating={mockEmptyCallback}
        isDisabled={false}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));
    const inputElement = screen.getByTestId(starId);
    await userEvent.click(inputElement);

    expect(fakeCallbackSpy).toHaveBeenCalledTimes(1);
  });

  it('input element should be disabled with "isDisabled" prop', () => {
    const {withStoreComponent} = withStore(
      <RatingStarInput
        starNumber={fakeValue}
        grade={ratingNames[fakeValue]}
        onChangeRating={mockEmptyCallback}
        isDisabled
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(starId)).toBeDisabled();
  });
});
