import { useEffect } from 'react';
import { CLASS_SCROLL_LOCK, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type ModalWrapperContentProps = {
  onModalClose: () => void;
  children: JSX.Element;
}

function ModalWrapperContent({onModalClose, children}: ModalWrapperContentProps): JSX.Element {
  //Компонент существует с той целью, чтобы в useEffect срабатывала cleanUp функция
  useEffect(() => {
    const closeModal = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape'){
        onModalClose();
      }
    };

    window.addEventListener('keydown', closeModal);
    document.body.classList.add(CLASS_SCROLL_LOCK);

    return () =>{
      window.removeEventListener('keydown', closeModal);
      document.body.classList.remove(CLASS_SCROLL_LOCK);
    };

  },[onModalClose]);


  return(
    <div className="modal__content">
      {children}
      <button onClick={onModalClose} className="cross-btn" type="button" aria-label="Закрыть попап">
        <CommonIcon icon={IconName.Close}/>
      </button>
    </div>
  );
}

export default ModalWrapperContent;
