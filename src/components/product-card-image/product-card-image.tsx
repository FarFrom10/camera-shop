import { CardImageSize } from '../../const';

type ProductCardImageProps = {
  isProductPage?: boolean;
}

function ProductCardImage({isProductPage = false}: ProductCardImageProps): JSX.Element {
  const imageWidth = isProductPage ? CardImageSize.ProductPage.Width : CardImageSize.ProductCard.Width;
  const imageHeight = isProductPage ? CardImageSize.ProductPage.Height : CardImageSize.ProductCard.Height;

  return (
    <div className="product-card__img">
      <picture>
        <source
          type="image/webp"
          srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x"
        />
        <img
          src="img/content/das-auge.jpg"
          srcSet="img/content/das-auge@2x.jpg 2x"
          width={imageWidth}
          height={imageHeight}
          alt="Ретрокамера «Das Auge IV»"
        />
      </picture>
    </div>
  );
}

export default ProductCardImage;
