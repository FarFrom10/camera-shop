import cn from 'classnames';
import { BasketItemData } from '../../types/cameras';
import { getTotalBasketPrice } from '../../utils/common';
import { getDiscountedTotalPrice } from '../../utils/discount';
import CommonButton from '../common-button/common-button';
import { ButtonText, ServerConnectionStatusMessage } from '../../const';
import { getBasketCamerasIds } from '../../utils/cameras';
import { useAppDispatch } from '../../hooks';
import { postOrderDataAction } from '../../store/api-actions';
import { toast } from 'react-toastify';
import { useModalBasketSuccess } from '../../hooks/use-modal-basket-success';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import ModalBasketSuccess from '../modal/modal-added-to-basket/modal-basket-success';

type BasketSummaryProps = {
  cameras: BasketItemData[];
  isBasketLoading: boolean;
}

function BasketSummary({ cameras, isBasketLoading }: BasketSummaryProps): JSX.Element {
  const dispatch = useAppDispatch();
  const totalBasketPrice = getTotalBasketPrice(cameras);
  const discountedPrice = getDiscountedTotalPrice(cameras, totalBasketPrice);
  const isDiscounted = totalBasketPrice !== discountedPrice;

  const {
    handleModalBasketSuccessOpen,
    handleModalBasketSuccessClose,
    handleNavigateToCatalog,
    showBasketSuccess
  } = useModalBasketSuccess();

  function handlePostOrderClick() {
    const camerasIds = getBasketCamerasIds(cameras);
    dispatch(postOrderDataAction({camerasIds, coupon: null}))
      .then((response) => {
        if (response.meta.requestStatus === 'rejected') {
          toast.warn(ServerConnectionStatusMessage.Fail.common);
        } else {
          handleModalBasketSuccessOpen();
        }
      });
  }

  return (
    <>
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
          <CommonButton onButtonClick={handlePostOrderClick} buttonText={ButtonText.PlaceAnOrder} isSubmit isDisabled={!cameras.length || isBasketLoading}/>
        </div>
      </div>

      <ModalWrapper
        onModalClose={handleModalBasketSuccessClose}
        isActive={showBasketSuccess}
        isModalNarrow
      >
        <ModalBasketSuccess
          onModalClose={handleModalBasketSuccessClose}
          onNavigateToCatalog={handleNavigateToCatalog}
          isOrder
        />
      </ModalWrapper>
    </>
  );
}

export default BasketSummary;
