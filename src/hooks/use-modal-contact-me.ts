import { useCallback, useMemo, useState } from 'react';
import { ModalContactMeType } from '../types/types';

type useModalContactMeData = [
  ModalContactMeType,
  (id: number | null) => void,
  () => void
]

export const useModalContactMe = (): useModalContactMeData => {
  const initialState: ModalContactMeType = useMemo(() =>({
    isOpen: false,
    currentId: null
  }), []);

  const [modalContactMe, setModalContactMe] = useState<ModalContactMeType>(initialState);
  const handleModalContactMeOpen = useCallback((id: number | null) => setModalContactMe(() => ({
    isOpen: true,
    currentId: id
  })), []);
  const handleModalContactMeClose = useCallback(() => setModalContactMe(initialState), [initialState]);

  return [modalContactMe, handleModalContactMeOpen, handleModalContactMeClose];
};
