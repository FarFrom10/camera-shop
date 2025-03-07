import { useEffect, useRef } from 'react';
import { CLASS_SCROLL_LOCK, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type ModalWrapperContentProps = {
  onModalClose: () => void;
  children: JSX.Element;
}

function ModalWrapperContent({onModalClose, children}: ModalWrapperContentProps): JSX.Element {
  //Компонент существует с той целью, чтобы в useEffect срабатывала cleanUp функция
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalElement = modalRef.current as HTMLDivElement;
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    //Без этого не получилось добавить фокус на модальном окне при его появлении
    setTimeout(() => {
      (firstFocusableElement as HTMLElement)?.focus();
    }, 300) ;

    const closeModal = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape'){
        onModalClose();
      }
    };

    window.addEventListener('keydown', closeModal);
    document.body.classList.add(CLASS_SCROLL_LOCK);

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          (firstFocusableElement as HTMLElement)?.focus();
        } else if (document.activeElement === firstFocusableElement && event.shiftKey) {
          event.preventDefault();
          (firstFocusableElement as HTMLElement)?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () =>{
      window.removeEventListener('keydown', closeModal);
      document.removeEventListener('keydown', handleTabKey);
      document.body.classList.remove(CLASS_SCROLL_LOCK);
    };

  },[onModalClose]);


  return(
    <div ref={modalRef} className="modal__content">
      <button onClick={onModalClose} className="cross-btn" type="button" aria-label="Закрыть попап">
        <CommonIcon icon={IconName.Close}/>
      </button>
      {children}
    </div>
  );
}

export default ModalWrapperContent;
