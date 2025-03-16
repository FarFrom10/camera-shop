import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';
import ModalWrapper from '../modal/modal-wrapper/modal-wrapper';
import ModalContactMe from '../modal/modal-contact-me/modal-contact-me';
import { useModalContactMe } from '../../hooks/use-modal-contact-me';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from '../empty-list-title/empty-list-title';

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
      {cameras.length > 0
        ?
        (
          <div data-testid='catalogCardsContainer' className="cards catalog__cards">
            {cards}
          </div>
        )
        : <EmptyListTitle message={EmptyListMessage.Cameras}/>}

      <ModalWrapper onModalClose={handleModalContactMeClose} isActive={modalContactMe.isOpen}>
        <ModalContactMe onModalClose={handleModalContactMeClose} camera={currentCamera}/>
      </ModalWrapper>
    </>
  );
}

export default CatalogCards;
