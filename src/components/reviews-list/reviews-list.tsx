import ReviewCard from '../review-card/review-card';
import { CameraReview } from '../../types/cameras';

type ReviewsListProps = {
  reviews: CameraReview[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsList = reviews.map((review) => <ReviewCard cameraReview={review} key={review.id}/>);
  return (
    <ul data-testid='reviewsList' className="review-block__list">
      {reviewsList}
    </ul>
  );
}

export default ReviewsList;
