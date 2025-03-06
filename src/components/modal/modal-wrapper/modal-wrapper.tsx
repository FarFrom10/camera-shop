import cn from 'classnames';
import ModalWrapperContent from '../../modal-wrapper-content/modal-wrapper-content';

type ModalWrapperProps = {
  isActive: boolean;
  onModalClose: () => void;
  children: JSX.Element;
}

function ModalWrapper({isActive, onModalClose, children}: ModalWrapperProps): JSX.Element {
  return(
    <div className={cn(
      'modal',
      {'is-active': isActive}
    )}
    >
      <div className="modal__wrapper">
        <div onClick={onModalClose} className="modal__overlay"/>
        {isActive &&
          <ModalWrapperContent onModalClose={onModalClose}>
            {children}
          </ModalWrapperContent>}
      </div>
    </div>
  );
}
export default ModalWrapper;
