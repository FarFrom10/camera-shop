import { useMemo } from 'react';
import { onHandleRatingChangeType } from '../../types/handlers';

type RatingStarInputProps = {
  rating: null | number;
  starNumber: number;
  grade: string;
  onChangeRating: onHandleRatingChangeType;
}

function RatingStarInput({starNumber, grade, rating, onChangeRating}: RatingStarInputProps): JSX.Element {
  const isChecked = useMemo(() => !!(rating && starNumber === rating), [rating, starNumber]);

  return (
    <>
      <input
        className="visually-hidden"
        onChange={onChangeRating}
        value={starNumber}
        checked={isChecked}
        id={`star-${starNumber}`}
        name="rate"
        type="radio"
      />
      <label className="rate__label" htmlFor={`star-${starNumber}`} title={grade} />
    </>
  );
}

export default RatingStarInput;
