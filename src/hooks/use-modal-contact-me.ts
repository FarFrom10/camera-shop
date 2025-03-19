import { useState } from 'react';
import { ModalContactMeType } from '../types/types';

type useModalContactMeData = [
  ModalContactMeType,
  (id: number | null) => void,
  () => void
]

export const useModalContactMe = (): useModalContactMeData => {
  const initialState: ModalContactMeType = {
    isOpen: false,
    currentId: null
  };

  const [modalContactMe, setModalContactMe] = useState<ModalContactMeType>(initialState);
  const handleModalContactMeOpen = (id: number | null) => setModalContactMe(() => ({
    isOpen: true,
    currentId: id
  }));
  const handleModalContactMeClose = () => setModalContactMe(initialState);

  return [modalContactMe, handleModalContactMeOpen, handleModalContactMeClose];
};
