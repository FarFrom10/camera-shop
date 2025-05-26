import { memo, useMemo } from 'react';
import { IconName, ProductRatingClass, RATING_STAR_NUMBER } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { nanoid } from '@reduxjs/toolkit';

type ProductRatingProps = {
  ratingNumber: number;
  ratingClass?: ProductRatingClass;
  reviewCount?: number;
  disableReviewCount?: boolean;
}

function ProductRatingTemplate({
  ratingNumber,
  ratingClass = ProductRatingClass.ProductCard,
  reviewCount,
  disableReviewCount = false,
}: ProductRatingProps): JSX.Element {
  const stars = useMemo(() => Array.from({length: RATING_STAR_NUMBER}).map((_, i) =>
    <CommonIcon icon={i > ratingNumber - 1 ? IconName.Star : IconName.StarFull} key={nanoid()}/>
  ), [ratingNumber]);

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

const ProductRating = memo(ProductRatingTemplate);

export default ProductRating;
