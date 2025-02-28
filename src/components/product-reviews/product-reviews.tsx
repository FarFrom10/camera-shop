import { ButtonText } from '../../const';
import CommonButton from '../common-button/common-button';
import ReviewsList from '../reviews-list/reviews-list';

function ProductReviews(): JSX.Element {
  return(
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
        </div>
        <ReviewsList/>
        <div className="review-block__buttons">
          <CommonButton buttonText={ButtonText.ShowMore}/>
        </div>
      </div>
    </section>
  );
}

export default ProductReviews;
