import { memo, useCallback, useState } from 'react';
import { ButtonText, EmptyListMessage, ModalTitle, REVIEWS_STEP_NUMBER } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectReviews } from '../../store/reviews-process/reviews-process.selectors';
import { getSortedReviews } from '../../utils/reviews';
import CommonButton from '../common-button/common-button';
import ReviewsList from '../reviews-list/reviews-list';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import ReviewForm from '../review-form/review-form';
import { useReviewForm } from '../../hooks/use-review-form';
import { useModalBasketSuccess } from '../../hooks/use-modal-basket-success';
import ModalBasketSuccess from '../modal/modal-added-to-basket/modal-basket-success';

type ProductReviewsProps = {
  cameraId: number;
}

function ProductReviewsTemplate({ cameraId }: ProductReviewsProps): JSX.Element {
  const reviews = useAppSelector(selectReviews);
  const [reviewsNumber, setReviewsNumber] = useState<number>(REVIEWS_STEP_NUMBER);

  const handleButtonClick = useCallback(() => reviewsNumber + REVIEWS_STEP_NUMBER > reviews.length
    ? setReviewsNumber(reviews.length)
    : setReviewsNumber((prev) => prev + REVIEWS_STEP_NUMBER), [reviews.length, reviewsNumber]);

  const sortedReviews = getSortedReviews(reviews, reviewsNumber);

  const {
    handleReviewFormOpen,
    handleReviewFormClose,
    showReviewForm,
  } = useReviewForm();

  const {
    handleModalBasketSuccessOpen,
    handleModalBasketSuccessClose,
    handleNavigateToCatalog,
    showBasketSuccess
  } = useModalBasketSuccess();

  return(
    <>
      <section data-testid='productReviews' className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <CommonButton onButtonClick={handleReviewFormOpen} isWhite buttonText={ButtonText.AddReview}/>
          </div>

          { reviews.length > 0
            ? <ReviewsList reviews={sortedReviews}/>
            : <EmptyListTitle message={EmptyListMessage.Reviews}/>}

          <div data-testid='productReviewsButtons' className="review-block__buttons">
            {reviewsNumber !== reviews.length && reviews.length > REVIEWS_STEP_NUMBER &&
            <CommonButton onButtonClick={handleButtonClick} buttonText={ButtonText.ShowMore}/>}
          </div>
        </div>
      </section>

      <ModalWrapper
        onModalClose={handleReviewFormClose}
        isActive={showReviewForm}
      >
        <ReviewForm
          cameraId={cameraId}
          onModalClose={handleReviewFormClose}
          onModalSuccessOpen={handleModalBasketSuccessOpen}
        />
      </ModalWrapper>

      <ModalWrapper
        onModalClose={handleModalBasketSuccessClose}
        isActive={showBasketSuccess}
        isModalNarrow
      >
        <ModalBasketSuccess
          titleText={ModalTitle.ThanksForReview}
          onModalClose={handleModalBasketSuccessClose}
          onNavigateToCatalog={handleNavigateToCatalog}
          isSingleButton
        />
      </ModalWrapper>
    </>
  );
}

const ProductReviews = memo(ProductReviewsTemplate);

export default ProductReviews;
