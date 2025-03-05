import { useState } from 'react';
import { ButtonText, REVIEWS_STEP_NUMBER } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectReviews } from '../../store/reviews-process/reviews-process.selectors';
import { getSortedReviews } from '../../utils/reviews';
import CommonButton from '../common-button/common-button';
import ReviewsList from '../reviews-list/reviews-list';

function ProductReviews(): JSX.Element {
  const reviews = useAppSelector(selectReviews);
  const [reviewsNumber, setReviewsNumber] = useState<number>(REVIEWS_STEP_NUMBER);

  const handleButtonClick = () => reviewsNumber + REVIEWS_STEP_NUMBER > reviews.length
    ? setReviewsNumber(reviews.length)
    : setReviewsNumber((prev) => prev + REVIEWS_STEP_NUMBER);

  const sortedReviews = getSortedReviews(reviews, reviewsNumber);

  return(
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
        </div>
        <ReviewsList reviews={sortedReviews}/>
        <div className="review-block__buttons">
          {reviewsNumber !== reviews.length &&
            <CommonButton onButtonClick={handleButtonClick} buttonText={ButtonText.ShowMore}/>}
        </div>
      </div>
    </section>
  );
}

export default ProductReviews;
