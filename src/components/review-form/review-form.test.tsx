import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import ReviewForm from './review-form';
import { makeFakeStore } from '../../utils/mocks';


describe('Component: ReviewForm', () => {
  const containerId = 'reviewForm';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ReviewForm
        cameraId={fakeCurrentCamera.id}
        onModalClose={mockEmptyCallback}
        onModalSuccessOpen={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
