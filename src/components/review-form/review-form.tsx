import { ChangeEvent, useCallback, useState } from 'react';
import { IconName } from '../../const';
import { FormReviewType } from '../../types/types';
import CommonIcon from '../common-icon/common-icon';
import ReviewFormRating from '../review-from-rating/review-form-rating';

function ReviewForm(): JSX.Element {
  const initialState: FormReviewType = {
    rating: null,
    name: '',
    advantages: '',
    disadvantages: '',
    review: ''
  };
  const [formData, setFormData] = useState<FormReviewType>(initialState);

  const handleChangeRating = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev)=>({
      ...prev,
      rating: Number(evt.target.value)
    }));
  }, []);

  return (
    <>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form method="post">
          <div className="form-review__rate">
            <ReviewFormRating rating={formData.rating} onChangeRating={handleChangeRating}/>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">
              Ваше имя
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <input
                  type="text"
                  name="user-name"
                  placeholder="Введите ваше имя"
                  required
                />
              </label>
              <p className="custom-input__error">Нужно указать имя</p>
            </div>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">
              Достоинства
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <input
                  type="text"
                  name="user-plus"
                  placeholder="Основные преимущества товара"
                  required
                />
              </label>
              <p className="custom-input__error">Нужно указать достоинства</p>
            </div>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">
              Недостатки
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <input
                  type="text"
                  name="user-minus"
                  placeholder="Главные недостатки товара"
                  required
                />
              </label>
              <p className="custom-input__error">Нужно указать недостатки</p>
            </div>
            <div className="custom-textarea form-review__item">
              <label>
                <span className="custom-textarea__label">
              Комментарий
                  <CommonIcon icon={IconName.Snowflake}/>
                </span>
                <textarea
                  name="user-comment"
                  minLength={5}
                  placeholder="Поделитесь своим опытом покупки"
                  defaultValue=''
                />
              </label>
              <div className="custom-textarea__error">
            Нужно добавить комментарий
              </div>
            </div>
          </div>
          <button className="btn btn--purple form-review__btn" type="submit">
        Отправить отзыв
          </button>
        </form>
      </div>
    </>

  );
}

export default ReviewForm;
