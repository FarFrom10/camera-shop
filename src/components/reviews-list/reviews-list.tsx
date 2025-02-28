import { nanoid } from '@reduxjs/toolkit';
import { TemporaryNumbers } from '../../const';
import ReviewCard from '../review-card/review-card';

function ReviewsList(): JSX.Element {
  const reviews = Array.from({length: TemporaryNumbers.Reviews}).map(() => <ReviewCard key={nanoid()}/>);
  return (
    <ul className="review-block__list">
      {reviews}
    </ul>
  );
}

export default ReviewsList;
