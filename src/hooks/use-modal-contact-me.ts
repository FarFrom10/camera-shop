import { useCallback, useMemo, useState } from 'react';
import { ModalContactMeType } from '../types/types';
import { CameraData } from '../types/cameras';

type useModalContactMeData = [
  ModalContactMeType,
  (id: number | null) => void,
  () => void,
  currentModalCamera: CameraData | null
]

type useModalContactMeProps = {
  cameras: CameraData[];
}

export const useModalContactMe = ({cameras}: useModalContactMeProps): useModalContactMeData => {
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

  const currentCameraIndex = useMemo(() => cameras.findIndex((item) => item.id === modalContactMe.currentId), [cameras, modalContactMe]);
  const currentModalCamera = useMemo(() => currentCameraIndex !== -1 ? cameras[currentCameraIndex] : null, [cameras, currentCameraIndex]);

  return [modalContactMe, handleModalContactMeOpen, handleModalContactMeClose, currentModalCamera];
};
