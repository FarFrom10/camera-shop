import { NameSpace } from '../../const';
import { mockReviews } from '../../mocks/mock-test';
import { selectIsReviewsLoading, selectReviews } from './reviews-process.selectors';

describe('ReviewsProcess selectors', () => {
  const state = {
    [NameSpace.Reviews]: {
      reviews: mockReviews,

      isReviewsLoading: false,
    }
  };

  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Reviews];
    const result = selectReviews(state);
    expect(result).toStrictEqual(reviews);
  });

  it('should return isReviewsLoading from state', () => {
    const { isReviewsLoading } = state[NameSpace.Reviews];
    const result = selectIsReviewsLoading(state);
    expect(result).toBe(isReviewsLoading);
  });
});
