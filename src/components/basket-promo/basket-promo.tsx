import { FormEvent, memo, useCallback, useEffect, useRef, useState } from 'react';
import { ButtonText, IconName, SERVER_POST_DELAY } from '../../const';
import CommonIcon from '../common-icon/common-icon';
import cn from 'classnames';
import { PromoCode, PromoStatus } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { postCouponAction } from '../../store/api-actions';
import { changePromoCode, resetPromoCode } from '../../store/basket-process/basket-process.slice';
import CommonButton from '../common-button/common-button';
import { throttle } from 'lodash';
import { toast } from 'react-toastify';
import { getThrottleMessage } from '../../utils/common';

type BasketPromoProps = {
  promoCode: PromoCode;
}

function BasketPromoTemplate({ promoCode }: BasketPromoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const initialState = {
    required: false,
    error: false,
    success: false,
  };

  const [promoStatus, setPromoStatus] = useState<PromoStatus>(initialState);
  const [isThrottled, setIsThrottled] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPromoStatus((prev) => ({
      ...prev,
      success: !!promoCode.coupon
    }));

    if (!promoCode.coupon && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [promoCode.coupon]);

  const throttledDispatchRef = useRef(
    throttle((convertedValue: string) => {
      setIsThrottled(false);

      dispatch(postCouponAction({ coupon: convertedValue }))
        .then((response) => {
          if (response.meta.requestStatus === 'rejected') {
            dispatch(resetPromoCode());
            setPromoStatus((prev) => ({
              ...prev,
              required: true,
              error: true
            }));
          } else {
            dispatch(changePromoCode(convertedValue));
            setPromoStatus({
              required: false,
              error: false,
              success: true
            });
          }
        });
    }, SERVER_POST_DELAY)
  );

  const handleFormSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!inputRef.current?.value) {
      return setPromoStatus((prev) => ({
        ...prev,
        required: true
      }));
    }

    if (isThrottled) {
      toast.warn(getThrottleMessage(SERVER_POST_DELAY));
      return;
    }

    const convertedValue = inputRef.current.value
      .replace(/\s+/g, '')
      .toLowerCase();
    inputRef.current.value = convertedValue;

    setIsThrottled(true);
    throttledDispatchRef.current(convertedValue);
  }, [isThrottled]);

  return(
    <div data-testid='basketPromo' className="basket__promo">
      <p className="title title--h4">
        Если у вас есть промокод на скидку, примените его в этом поле
      </p>
      <div className="basket-form">
        <form onSubmit={handleFormSubmit} action="#">
          <div data-testid="basketPromoInputWrapper" className={cn(
            'custom-input',
            {'is-invalid': promoStatus.error},
            {'is-valid': promoStatus.success},
          )}
          >
            <label>
              <span className="custom-input__label">
                Промокод
                {promoStatus.required && <CommonIcon icon={IconName.Snowflake}/>}
              </span>
              <input
                data-testid="basketPromoInput"
                ref={inputRef}
                defaultValue={promoCode.coupon}
                type="text"
                name="promo"
                placeholder="Введите промокод"
              />
            </label>
            <p className="custom-input__error">Промокод неверный</p>
            <p className="custom-input__success">Промокод принят!</p>
          </div>
          <CommonButton isSubmit buttonText={ButtonText.Apply} isWhite/>
        </form>
      </div>
    </div>
  );
}

const BasketPromo = memo(BasketPromoTemplate);

export default BasketPromo;
