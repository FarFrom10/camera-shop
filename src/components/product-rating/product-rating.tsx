import cn from 'classnames';
import { IconName, RATING_STAR_NUMBER } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import { nanoid } from '@reduxjs/toolkit';

type ProductRatingProps = {
  ratingNumber: number;
  isProductPage?: boolean;
}

function ProductRating({ratingNumber, isProductPage = false}: ProductRatingProps): JSX.Element {
  const stars = Array.from({length: RATING_STAR_NUMBER}).map((_, i) =>
    <CommonIcon icon={i > ratingNumber - 1 ? IconName.Star : IconName.StarFull} key={nanoid()}/>
  );

  return (
    <div className={cn(
      'rate',
      {'product-card__rate': !isProductPage},
      {'product__rate': isProductPage},
    )}
    >
      {stars}
      <p className="visually-hidden">{`Рейтинг: ${ratingNumber}`}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>23
      </p>
    </div>
  );
}

export default ProductRating;
