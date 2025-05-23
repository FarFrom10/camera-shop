import { IconName, ratingNames } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import RatingStarInput from '../rating-star-input/rating-star-input';
import { onHandleRatingChangeType } from '../../types/handlers';
import { FieldError } from 'react-hook-form';
import cn from 'classnames';

type ReviewFormRatingProps = {
  onChangeRating: onHandleRatingChangeType;
  rating: null | number;
  error: FieldError | undefined;
  isDisabled: boolean;
}

function ReviewFormRating({ onChangeRating, rating, error, isDisabled }: ReviewFormRatingProps): JSX.Element {
  const ratingToDisplay = rating !== null ? rating : 0;
  const starsList = ratingNames.map((_, i) => {
    const gradeIndex = ratingNames[ratingNames.length - 1 - i];
    return (
      <RatingStarInput
        onChangeRating={onChangeRating}
        key={gradeIndex}
        starNumber={ratingNames.length - i}
        grade={gradeIndex}
        isDisabled={isDisabled}
      />
    );
  });

  return (
    <fieldset className={cn(
      'rate',
      'form-review__item',
      {'is-invalid': error}
    )}
    >
      <legend className="rate__caption">
            Рейтинг
        <CommonIcon icon={IconName.Snowflake}/>
      </legend>
      <div className="rate__bar">
        <div className="rate__group">
          {starsList}
        </div>
        <div className="rate__progress">
          <span className="rate__stars">{ratingToDisplay}</span> <span>/</span>{' '}
          <span className="rate__all-stars">{ratingNames.length}</span>
        </div>
      </div>
      {error && <p className="rate__message">{error.message}</p>}
    </fieldset>
  );
}

export default ReviewFormRating;
