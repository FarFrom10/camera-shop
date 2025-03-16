import { IconName, ProductRatingClass, RATING_STAR_NUMBER, TemporaryNumbers } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { nanoid } from '@reduxjs/toolkit';

type ProductRatingProps = {
  ratingNumber: number;
  ratingClass?: ProductRatingClass;
  reviewCount?: number;
  disableReviewCount?: boolean;
}

function ProductRating({
  ratingNumber,
  ratingClass = ProductRatingClass.ProductCard,
  reviewCount = TemporaryNumbers.ReviewCount,
  disableReviewCount = false,
}: ProductRatingProps): JSX.Element {
  const stars = Array.from({length: RATING_STAR_NUMBER}).map((_, i) =>
    <CommonIcon icon={i > ratingNumber - 1 ? IconName.Star : IconName.StarFull} key={nanoid()}/>
  );

  return (
    <div data-testid='productRatingContainer' className={`rate ${ratingClass}`}>
      {stars}
      <p className="visually-hidden">{`Рейтинг: ${ratingNumber}`}</p>

      {!disableReviewCount &&
      <p data-testid='rateCount' className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{reviewCount}
      </p>}
    </div>
  );
}

export default ProductRating;
