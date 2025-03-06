import { CameraData } from '../../../types/cameras';
import BasketItemMini from '../../basket-item-mini/basket-item-mini';

type ModalContactMeProps ={
  camera: CameraData | null;
}

function ModalContactMe({camera}: ModalContactMeProps): JSX.Element {
  return(
    <>
      <p className="title title--h4">Свяжитесь со мной</p>
      {camera !== null && <BasketItemMini camera={camera}/>}
    </>
  );
}

export default ModalContactMe;
