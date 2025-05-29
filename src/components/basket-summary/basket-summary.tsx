import cn from 'classnames';
import { BasketItemData } from '../../types/cameras';
import { filterCamerasByPromo, getTotalBasketPrice } from '../../utils/common';
import { getDiscountedTotalPrice } from '../../utils/discount';
import CommonButton from '../common-button/common-button';
import { ButtonText, ModalTitle, ServerConnectionStatusMessage } from '../../const';
import { getBasketCamerasIds } from '../../utils/cameras';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postOrderDataAction } from '../../store/api-actions';
import { toast } from 'react-toastify';
import { useModalBasketSuccess } from '../../hooks/use-modal-basket-success';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import ModalBasketSuccess from '../modal/modal-added-to-basket/modal-basket-success';
import { selectPromoCameras } from '../../store/cameras-process/cameras-process.selectors';
import BasketPromo from '../basket-promo/basket-promo';
import { selectPromoCode } from '../../store/basket-process/basket-process.selectors';

type BasketSummaryProps = {
  cameras: BasketItemData[];
  isBasketLoading: boolean;
}

function BasketSummary({ cameras, isBasketLoading }: BasketSummaryProps): JSX.Element {
  const dispatch = useAppDispatch();
  const promoCameras = useAppSelector(selectPromoCameras);
  const promoCode = useAppSelector(selectPromoCode);

  const filteredCameras = filterCamerasByPromo(cameras, promoCameras);
  const totalBasketPrice = getTotalBasketPrice(cameras);
  const discountedPrice = getDiscountedTotalPrice(filteredCameras, totalBasketPrice, promoCode);
  const totalDiscount = Number((totalBasketPrice - discountedPrice).toFixed(2));
  const isDiscounted = totalBasketPrice !== discountedPrice;

  const {
    handleModalBasketSuccessOpen,
    handleModalBasketSuccessClose,
    handleNavigateToCatalog,
    showBasketSuccess
  } = useModalBasketSuccess();

  function handlePostOrderClick() {
    const camerasIds = getBasketCamerasIds(cameras);
    dispatch(postOrderDataAction({camerasIds, coupon: promoCode.coupon}))
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
        <BasketPromo promoCode={promoCode}/>
        <div data-testid="basketSummaryOrder" className="basket__summary-order">
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
              {`${totalDiscount} ₽`}
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
          titleText={ModalTitle.ThanksForPurchase}
          onModalClose={handleModalBasketSuccessClose}
          onNavigateToCatalog={handleNavigateToCatalog}
          isSingleButton
        />
      </ModalWrapper>
    </>
  );
}

export default BasketSummary;
