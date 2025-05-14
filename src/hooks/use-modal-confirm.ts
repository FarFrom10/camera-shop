import { useCallback, useMemo, useState } from 'react';
import { ModalStateType } from '../types/types';
import { BasketCameraData } from '../types/cameras';
import { useAppDispatch } from '.';
import { removeProduct } from '../store/basket-process/basket-process.slice';

type UseModalConfirmData = {
  modalConfirm: ModalStateType;
  handleModalConfirmOpen: (id: number | null) => void;
  handleModalConfirmClose: () => void;
  handleProductRemove: () => void;
  currentModalCamera: BasketCameraData | null;
}

type UseModalConfirmProps = {
  cameras: BasketCameraData[];
}

export const useModalConfirm = ({cameras}: UseModalConfirmProps): UseModalConfirmData => {
  const dispatch = useAppDispatch();

  const initialState: ModalStateType = useMemo(() =>({
    isOpen: false,
    currentId: null
  }), []);

  const [modalConfirm, setModalConfirm] = useState<ModalStateType>(initialState);
  const handleModalConfirmOpen = useCallback((id: number | null) => setModalConfirm(() => ({
    isOpen: true,
    currentId: id
  })), []);
  const handleModalConfirmClose = useCallback(() => {
    setModalConfirm(initialState);
  }, [initialState]);

  const handleProductRemove = useCallback(() => {
    if(modalConfirm.currentId){
      dispatch(removeProduct(modalConfirm.currentId));
    }

    handleModalConfirmClose();
  }, [handleModalConfirmClose, modalConfirm.currentId, dispatch]);

  const currentCameraIndex = useMemo(() => cameras.findIndex((item) => item.id === modalConfirm.currentId), [cameras, modalConfirm]);
  const currentModalCamera = useMemo(() => currentCameraIndex !== -1 ? cameras[currentCameraIndex] : null, [cameras, currentCameraIndex]);

  return {
    modalConfirm,
    handleModalConfirmOpen,
    handleModalConfirmClose,
    handleProductRemove,
    currentModalCamera,
  };
};
