import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import ModalContactMe from '../modal/modal-contact-me/modal-contact-me';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';

type CatalogCardsProps = {
  cameras: CameraData[];
}

function CatalogCards({cameras}: CatalogCardsProps): JSX.Element {
  const [
    modalContactMe,
    handleModalContactMeOpen,
    handleModalContactMeClose
  ] = useModalContactMe();

  const cards = cameras.map((camera) => <ProductCard onButtonClick={handleModalContactMeOpen} camera={camera} key={camera.id}/>);

  const currentCameraIndex = cameras.findIndex((item) => item.id === modalContactMe.currentId);
  const currentCamera = currentCameraIndex !== -1 ? cameras[currentCameraIndex] : null;

  return(
    <>
      <div className="cards catalog__cards">
        {cards}
      </div>
      <ModalWrapper onModalClose={handleModalContactMeClose} isActive={modalContactMe.isOpen}>
        <ModalContactMe onModalClose={handleModalContactMeClose} camera={currentCamera}/>
      </ModalWrapper>
    </>
  );
}

export default CatalogCards;
