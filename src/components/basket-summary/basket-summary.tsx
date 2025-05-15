import cn from 'classnames';
import { BasketItemsData } from '../../types/cameras';
import { getTotalBasketPrice } from '../../utils/common';
import { getDiscountedTotalPrice } from '../../utils/discount';

type BasketSummaryProps = {
  cameras: BasketItemsData[];
}

function BasketSummary({ cameras }: BasketSummaryProps): JSX.Element {
  const totalBasketPrice = getTotalBasketPrice(cameras);
  const discountedPrice = getDiscountedTotalPrice(cameras, totalBasketPrice);
  const isDiscounted = totalBasketPrice !== discountedPrice;

  return (
    <div data-testid='basketSummary' className="basket__summary">
      <div className="basket__promo">
      </div>
      <div className="basket__summary-order">
        <p className="basket__summary-item">
          <span className="basket__summary-text">Всего:</span>
          <span className="basket__summary-value">{`${totalBasketPrice} ₽`}</span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Скидка:</span>
          <span className={cn(
            'basket__summary-value',
            {'basket__summary-value--bonus': isDiscounted}
          )}
          >
            {`${totalBasketPrice - discountedPrice} ₽`}
          </span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text basket__summary-text--total">
                  К оплате:
          </span>
          <span className="basket__summary-value basket__summary-value--total">
            {`${discountedPrice} ₽`}
          </span>
        </p>
        <button className="btn btn--purple" type="submit">
                Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default BasketSummary;
