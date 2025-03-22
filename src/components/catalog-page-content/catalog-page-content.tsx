import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';
import { selectCameras } from '../../store/cameras-process/cameras-process.selectors';
import CatalogAside from '../catalog-aside/catalog-aside';
import CatalogCards from '../catalog-cards/catalog-cards';
import ModalContactMe from '../modal/modal-contact-me/modal-contact-me';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';

function CatalogPageContent(): JSX.Element {
  const cameras = useAppSelector(selectCameras);

  const [
    modalContactMe,
    handleModalContactMeOpen,
    handleModalContactMeClose
  ] = useModalContactMe();

  const currentCameraIndex = useMemo(() => cameras.findIndex((item) => item.id === modalContactMe.currentId), [cameras, modalContactMe]);
  const currentCamera = useMemo(() => currentCameraIndex !== -1 ? cameras[currentCameraIndex] : null, [cameras, currentCameraIndex]);

  return (
    <section data-testid='catalogPageContent' className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogAside/>
          <div className="catalog__content">
            <CatalogCards
              cameras={cameras}
              onModalContactMeOpen={handleModalContactMeOpen}
            />
          </div>
        </div>
        <ModalWrapper onModalClose={handleModalContactMeClose} isActive={modalContactMe.isOpen}>
          <ModalContactMe onModalClose={handleModalContactMeClose} camera={currentCamera}/>
        </ModalWrapper>
      </div>
    </section>
  );
}

export default CatalogPageContent;
