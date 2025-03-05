function ModalWrapper(): JSX.Element {
  return(
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <div className="modal__content">
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalWrapper;
