import { EmptyListMessage } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useModalConfirm } from '../../hooks/use-modal-confirm';
import { selectAddedCameras } from '../../store/basket-process/basket-process.selectors';
import { changeAmount } from '../../store/basket-process/basket-process.slice';
import BasketItem from '../basket-item/basket-item';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import ModalRemoveItem from '../modal/modal-remove-item/modal-remove-item';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';

function BasketList(): JSX.Element {
  const dispatch = useAppDispatch();
  const basketCameras = useAppSelector(selectAddedCameras);
  const handleAmountChange = (id: number, amount: number) => dispatch(changeAmount({id, amount}));

  const {
    modalConfirm,
    handleModalConfirmOpen,
    handleModalConfirmClose,
    handleProductRemove,
    currentModalCamera,
  } = useModalConfirm({cameras: basketCameras});

  const basketList = basketCameras.map((camera) =>
    (
      <BasketItem
        key={camera.id}
        camera={camera}
        onAmountChange={handleAmountChange}
        onModalOpen={handleModalConfirmOpen}
      />
    ));

  return(
    <>
      <ul data-testid='basketList' className="basket__list">
        {
          !basketCameras.length
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

export default BasketList;
