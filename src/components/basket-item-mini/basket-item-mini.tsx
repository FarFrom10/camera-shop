import { CommonPictureCategory, CommonPictureClass } from '../../const';
import { CameraData } from '../../types/cameras';
import BasketItemDescription from '../basket-item-description/basket-item-description';
import CommonPicture from '../common-picture/common-picture';

type BasketItemMiniProps = {
  camera: CameraData;
}

function BasketItemMini({camera}: BasketItemMiniProps): JSX.Element {
  const {
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
  } = camera;

  return (
    <div data-testid='basketItemMini' className="basket-item basket-item--short">
      <CommonPicture
        category={CommonPictureCategory.BasketItem}
        imageClass={CommonPictureClass.Basket}
        img={previewImg}
        img2x={previewImg2x}
        webp={previewImgWebp}
        webp2x={previewImgWebp2x}
      />
      <BasketItemDescription camera={camera} shouldDisplayPrice/>
    </div>
  );
}

export default BasketItemMini;
