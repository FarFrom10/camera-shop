import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import { fakeReviews } from '../../mocks/mock-test';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  const containerId = 'reviewsList';

  it('should render correctly', () => {
    render(withRouter(
      <ReviewsList reviews={fakeReviews}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
