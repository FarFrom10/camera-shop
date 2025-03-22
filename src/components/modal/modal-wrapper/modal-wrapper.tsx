import cn from 'classnames';
import ModalWrapperContent from '../../modal-wrapper-content/modal-wrapper-content';
import { memo } from 'react';

type ModalWrapperProps = {
  isActive: boolean;
  onModalClose: () => void;
  children: JSX.Element;
}

function ModalWrapperTemplate({isActive, onModalClose, children}: ModalWrapperProps): JSX.Element {
  return(
    <div data-testid='modalWrapper' className={cn(
      'modal',
      {'is-active': isActive}
    )}
    >
      <div className="modal__wrapper">
        <div data-testid='modalWrapperOverlay' onClick={onModalClose} className="modal__overlay"/>
        {isActive &&
          <ModalWrapperContent onModalClose={onModalClose}>
            {children}
          </ModalWrapperContent>}
      </div>
    </div>
  );
}

const ModalWrapper = memo(ModalWrapperTemplate);

export default ModalWrapper;
