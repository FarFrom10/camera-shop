import { ItemImageCategory, TemporaryImages } from '../../const';
import cn from 'classnames';
import { ImageSettings } from './common-item-image-settings';

type CommonItemImageProps = {
  category: ItemImageCategory;
  isBasketPage?: boolean;
}

function CommonItemImage({category, isBasketPage = false,}: CommonItemImageProps): JSX.Element {
  return (
    <div className={cn(
      {'product-card__img': !isBasketPage},
      {'basket-item__img': isBasketPage}
    )}
    >
      <picture>
        <source
          type="image/webp"
          src={TemporaryImages.PreviewImgWebp}
          srcSet={TemporaryImages.PreviewImgWebp2x}
        />
        <img
          src={TemporaryImages.PreviewImg}
          srcSet={TemporaryImages.PreviewImg2x}
          width={ImageSettings[category].width}
          height={ImageSettings[category].height}
          alt="Ретрокамера «Das Auge IV»"
        />
      </picture>
    </div>
  );
}

export default CommonItemImage;
