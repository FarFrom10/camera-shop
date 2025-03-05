import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DateFormat, ProductRatingClass } from '../../const';
import { CameraReview } from '../../types/cameras';
import ProductRating from '../product-rating/product-rating';
dayjs.locale('ru');

type ReviewCardProps = {
  cameraReview: CameraReview;
}

function ReviewCard({cameraReview}: ReviewCardProps): JSX.Element {
  const {
    createAt,
    userName,
    advantage,
    disadvantage,
    review,
    rating,
  } = cameraReview;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={dayjs(createAt).format(DateFormat.DateTime)}>
          {dayjs(createAt).format(DateFormat.Review)}
        </time>
      </div>
      <ProductRating ratingNumber={rating} ratingClass={ProductRatingClass.ReviewCard} disableReviewCount/>
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">
            {advantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">
            {disadvantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
            {review}
          </p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
