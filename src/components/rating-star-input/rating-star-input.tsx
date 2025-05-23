import { onHandleRatingChangeType } from '../../types/handlers';

type RatingStarInputProps = {
  starNumber: number;
  grade: string;
  onChangeRating: onHandleRatingChangeType;
  isDisabled: boolean;
}

function RatingStarInput({starNumber, grade, onChangeRating, isDisabled}: RatingStarInputProps): JSX.Element {
  return (
    <>
      <input
        disabled={isDisabled}
        className="visually-hidden"
        onChange={onChangeRating}
        value={starNumber}
        id={`star-${starNumber}`}
        name="rate"
        type="radio"
      />
      <label className="rate__label" htmlFor={`star-${starNumber}`} title={grade} />
    </>
  );
}

export default RatingStarInput;
