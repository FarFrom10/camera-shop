import { useCallback, useMemo, useState } from 'react';
import { ModalStateType } from '../types/types';
import { CameraData } from '../types/cameras';

type UseModalAddToBasketData = [
  ModalStateType,
  (id: number | null) => void,
  () => void,
  currentModalCamera: CameraData | null,
]

type UseModalAddToBasketProps = {
  cameras: CameraData[];
}

export const useModalAddToBasket = ({cameras}: UseModalAddToBasketProps): UseModalAddToBasketData => {
  const initialState: ModalStateType = useMemo(() =>({
    isOpen: false,
    currentId: null
  }), []);

  const [modalAddToBasket, setModalAddToBasket] = useState<ModalStateType>(initialState);
  const handleModalAddToBasketOpen = useCallback((id: number | null) => setModalAddToBasket(() => ({
    isOpen: true,
    currentId: id
  })), []);
  const handleModalAddToBasketClose = useCallback(() => {
    setModalAddToBasket(initialState);

  }, [initialState]);

  const currentCameraIndex = useMemo(() => cameras.findIndex((item) => item.id === modalAddToBasket.currentId), [cameras, modalAddToBasket]);
  const currentModalCamera = useMemo(() => currentCameraIndex !== -1 ? cameras[currentCameraIndex] : null, [cameras, currentCameraIndex]);

  return [
    modalAddToBasket,
    handleModalAddToBasketOpen,
    handleModalAddToBasketClose,
    currentModalCamera,
  ];
};
