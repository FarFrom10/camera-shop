import cn from 'classnames';
import ModalWrapperContent from '../modal-wrapper-content/modal-wrapper-content';
import { memo } from 'react';
import { createPortal } from 'react-dom';
import { MODAL_ROOT_ID } from '../../../const';

type ModalWrapperProps = {
  isActive: boolean;
  onModalClose: () => void;
  children: JSX.Element;
  isModalNarrow?: boolean;
}

function ModalWrapperTemplate({isActive, onModalClose, children, isModalNarrow = false}: ModalWrapperProps): JSX.Element {
  const modalRoot = document.getElementById(MODAL_ROOT_ID);

  if (!modalRoot) {
    return <div data-testid='modalWrapper'></div>;
  }

  return createPortal(
    <div data-testid='modalWrapper' className={cn(
      'modal',
      {'is-active': isActive},
      {'modal--narrow': isModalNarrow}
    )}
    >
      <div className="modal__wrapper">
        <div data-testid='modalWrapperOverlay' onClick={onModalClose} className="modal__overlay"/>
        {isActive &&
          <ModalWrapperContent onModalClose={onModalClose}>
            {children}
          </ModalWrapperContent>}
      </div>
    </div>,
    modalRoot
  );
}

const ModalWrapper = memo(ModalWrapperTemplate);

export default ModalWrapper;
