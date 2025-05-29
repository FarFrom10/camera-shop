import { memo, useCallback, useMemo } from 'react';
import { EmptyListMessage } from '../../const';
import { useAppDispatch } from '../../hooks';
import { useModalConfirm } from '../../hooks/use-modal-confirm';
import { changeAmount } from '../../store/basket-process/basket-process.slice';
import { BasketItemData } from '../../types/cameras';
import BasketItem from '../basket-item/basket-item';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import ModalRemoveItem from '../modal/modal-remove-item/modal-remove-item';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';

type BasketListProps = {
  cameras: BasketItemData[];
  isBasketLoading: boolean;
}

function BasketListTemplate({ cameras, isBasketLoading }: BasketListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleAmountChange = useCallback((id: number, amount: number) => dispatch(changeAmount({id, amount})), [dispatch]);

  const {
    modalConfirm,
    handleModalConfirmOpen,
    handleModalConfirmClose,
    handleProductRemove,
    currentModalCamera,
  } = useModalConfirm({ cameras });

  const basketList = useMemo(() => cameras.map((camera) =>
    (
      <BasketItem
        key={camera.id}
        camera={camera}
        onAmountChange={handleAmountChange}
        onModalOpen={handleModalConfirmOpen}
        isBasketLoading={isBasketLoading}
      />
    )), [cameras, handleAmountChange, handleModalConfirmOpen, isBasketLoading]);

  return(
    <>
      <ul data-testid='basketList' className="basket__list">
        {
          !cameras.length
            ? <EmptyListTitle message={EmptyListMessage.Basket}/>
            : basketList
        }
      </ul>

      <ModalWrapper
        onModalClose={handleModalConfirmClose}
        isActive={modalConfirm.isOpen}
      >
        <ModalRemoveItem
          camera={currentModalCamera}
          onModalClose={handleModalConfirmClose}
          onProductRemove={handleProductRemove}
        />
      </ModalWrapper>
    </>
  );
}

const BasketList = memo(BasketListTemplate);

export default BasketList;
