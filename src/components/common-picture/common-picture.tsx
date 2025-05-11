import { memo, useMemo } from 'react';
import { CommonPictureCategory, CommonPictureClass } from '../../const';
import BannerInfo from '../banner-info/banner-info';
import { ImageSettings } from './common-picture-settings';

type CommonPictureProps = {
  category: CommonPictureCategory;
  imageClass?: CommonPictureClass;
  name: string;
  id: string;
  img: string;
  img2x:string;
  webp: string;
  webp2x: string;
}

function CommonPictureTemplate({
  category,
  imageClass = CommonPictureClass.Product,
  id,
  name,
  img,
  img2x,
  webp,
  webp2x,
}: CommonPictureProps): JSX.Element {
  const isBanner = useMemo(() =>category === CommonPictureCategory.Banner, [category]);

  return (
    <div className={imageClass}>
      <picture data-testid="commonPictureContainer" >
        <source
          data-testid="commonPictureSource"
          type="image/webp"
          srcSet={`${webp}, ${webp2x}`}
        />
        <img
          src={img}
          srcSet={img2x}
          width={ImageSettings[category].width}
          height={ImageSettings[category].height}
          alt={name}
        />
      </picture>
      {isBanner && <BannerInfo id={id} name={name}/>}
    </div>
  );
}

const CommonPicture = memo(CommonPictureTemplate);

export default CommonPicture;
