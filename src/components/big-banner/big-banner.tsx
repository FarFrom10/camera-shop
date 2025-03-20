import { CommonPictureCategory, CommonPictureClass, Delay } from '../../const';
import { PromoCameraData } from '../../types/cameras';
import CommonPicture from '../common-picture/common-picture';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './big-banner.module.css';

type BigBannerProps = {
  promoCameras: PromoCameraData[];
}

function BigBanner({promoCameras}: BigBannerProps): JSX.Element {
  const slides = promoCameras.map((camera) => {
    const {
      id,
      name,
      previewImg,
      previewImg2x,
      previewImgWebp,
      previewImgWebp2x,
    } = camera;

    return (
      <SwiperSlide key={id}>
        <CommonPicture
          category={CommonPictureCategory.Banner}
          imageClass={CommonPictureClass.Banner}
          id={String(id)}
          name={name}
          img={previewImg}
          img2x={previewImg2x}
          webp={previewImgWebp}
          webp2x={previewImgWebp2x}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: Delay.Slider,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      slidesPerView={1}
    >
      {slides}
    </Swiper>
  );
}

export default BigBanner;
