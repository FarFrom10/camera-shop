import { CommonPictureCategory, CommonPictureClass } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectPromoCameras } from '../../store/cameras-process/cameras-process.selectors';
import CommonPicture from '../common-picture/common-picture';

function BigBanner(): JSX.Element {
  const promoCameras = useAppSelector(selectPromoCameras);
  const {
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
  } = promoCameras[0];

  return (
    <CommonPicture
      category={CommonPictureCategory.Banner}
      imageClass={CommonPictureClass.Banner}
      name={name}
      img={previewImg}
      img2x={previewImg2x}
      webp={previewImgWebp}
      webp2x={previewImgWebp2x}
    />
  );
}

export default BigBanner;
