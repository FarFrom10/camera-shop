import { TemporaryNumbers } from '../../const';
import ProductRating from '../product-rating/product-rating';

function ReviewCard(): JSX.Element {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">Сергей Горский</p>
        <time className="review-card__data" dateTime="2022-04-13">
                    13 апреля
        </time>
      </div>
      <ProductRating ratingNumber={TemporaryNumbers.Rating}/>
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">
                      Надёжная, хорошо лежит в руке, необычно выглядит
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">
                      Тяжеловата, сложно найти плёнку
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
                      Раз в полгода достаю из-под стекла, стираю пыль, заряжаю —
                      работает как часы. Ни у кого из знакомых такой нет, все
                      завидуют) Теперь это жемчужина моей коллекции, однозначно
                      стоит своих денег!
          </p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
