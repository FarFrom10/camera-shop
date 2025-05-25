import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonText, IconName, ModalTitle, ReviewValidNumber, ServerConnectionStatusMessage } from '../../const';
import { FormReviewType } from '../../types/types';
import CommonIcon from '../common-icon/common-icon';
import ReviewFormRating from '../review-from-rating/review-form-rating';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import FormFieldWrapper from '../form-field-wrapper/form-field-wrapper';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewDataAction } from '../../store/api-actions';
import CommonButton from '../common-button/common-button';
import { selectIsPostReviewLoading } from '../../store/reviews-process/reviews-process.selectors';
import { toast } from 'react-toastify';

const schema = Yup.object().shape({
  rating: Yup.number()
    .required('Нужно оценить товар')
    .min(ReviewValidNumber.Rating.min, `Не менее ${ReviewValidNumber.Rating.min} звезды`)
    .max(ReviewValidNumber.Rating.max, `Не более ${ReviewValidNumber.Rating.max} звёзд`),
  userName: Yup.string()
    .required('Нужно указать имя')
    .min(ReviewValidNumber.Text.userName.min, `Минимум ${ReviewValidNumber.Text.userName.min} символа`)
    .max(ReviewValidNumber.Text.userName.max, `Максимум ${ReviewValidNumber.Text.userName.max} символов`),
  advantage: Yup.string()
    .required('Нужно указать достоинства')
    .min(ReviewValidNumber.Text.general.min, `Не менее ${ReviewValidNumber.Text.general.min} символов`)
    .max(ReviewValidNumber.Text.general.max, `Не более ${ReviewValidNumber.Text.general.max} символов`),
  disadvantage: Yup.string()
    .required('Нужно указать недостатки')
    .min(ReviewValidNumber.Text.general.min, `Не менее ${ReviewValidNumber.Text.general.min} символов`)
    .max(ReviewValidNumber.Text.general.max, `Не более ${ReviewValidNumber.Text.general.max} символов`),
  review: Yup.string()
    .required('Нужно добавить комментарий')
    .min(ReviewValidNumber.Text.general.min, `Не менее ${ReviewValidNumber.Text.general.min} символов`)
    .max(ReviewValidNumber.Text.general.max, `Не более ${ReviewValidNumber.Text.general.max} символов`),
});

type ReviewFormProps = {
  cameraId: number;
  onModalClose: () => void;
  onModalSuccessOpen: () => void;
}

function ReviewForm({ cameraId, onModalClose, onModalSuccessOpen }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isPostReviewLoading = useAppSelector(selectIsPostReviewLoading);

  const {register, control, handleSubmit, formState: { errors } } = useForm<FormReviewType>({
    resolver: yupResolver(schema),
    defaultValues: {
      rating: 0,
      userName: '',
      advantage: '',
      disadvantage: '',
      review: ''
    }
  });

  const onSubmit = (data: FormReviewType) => {
    dispatch(postReviewDataAction({
      ...data,
      cameraId
    }))
      .then((response) => {
        if (response.meta.requestStatus === 'rejected') {
          toast.warn(ServerConnectionStatusMessage.Fail.common);
        } else {
          onModalClose();
          onModalSuccessOpen();
        }
      });
  };

  return (
    <>
      <p className="title title--h4">{ModalTitle.LeaveReview}</p>
      <div className="form-review">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }} method="post"
        >
          <div className="form-review__rate">
            <Controller
              name="rating"
              control={control}
              rules={{ required: 'Нужно оценить товар' }}
              render={({ field }) => (
                <ReviewFormRating
                  rating={field.value}
                  error={errors.rating}
                  onChangeRating={(value) => field.onChange(value)}
                  isDisabled={isPostReviewLoading}
                />
              )}
            />

            <FormFieldWrapper error={errors.userName}>
              <label>
                <span className="custom-input__label">
              Ваше имя
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <input
                  disabled={isPostReviewLoading}
                  type="text"
                  {...register('userName')}
                  placeholder="Введите ваше имя"
                />
              </label>
            </FormFieldWrapper>

            <FormFieldWrapper error={errors.advantage}>
              <label>
                <span className="custom-input__label">
              Достоинства
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <input
                  disabled={isPostReviewLoading}
                  type="text"
                  {...register('advantage')}
                  placeholder="Основные преимущества товара"
                />
              </label>
            </FormFieldWrapper>

            <FormFieldWrapper error={errors.disadvantage}>
              <label>
                <span className="custom-input__label">
              Недостатки
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <input
                  disabled={isPostReviewLoading}
                  type="text"
                  {...register('disadvantage')}
                  placeholder="Главные недостатки товара"
                />
              </label>
            </FormFieldWrapper>

            <FormFieldWrapper isTextarea error={errors.review}>
              <label>
                <span className="custom-textarea__label">
              Комментарий
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <textarea
                  disabled={isPostReviewLoading}
                  {...register('review')}
                  placeholder="Поделитесь своим опытом покупки"
                />
              </label>
            </FormFieldWrapper>
          </div>

          <CommonButton isLoading={isPostReviewLoading} isSubmit isFormReview buttonText={ButtonText.LeaveReview}/>
        </form>
      </div>
    </>

  );
}

export default ReviewForm;
