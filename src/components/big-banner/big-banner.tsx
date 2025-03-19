import { CommonPictureCategory, CommonPictureClass, Delay } from '../../const';
import { PromoCameraData } from '../../types/cameras';
import CommonPicture from '../common-picture/common-picture';
import PaginationItem from '../pagination-item/pagination-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

type BigBannerProps = {
  promoCameras: PromoCameraData[];
}

function BigBanner({promoCameras}: BigBannerProps): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

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

  const paginationList = Array.from({length: promoCameras.length}).map((_, i) =>
    <PaginationItem isActive={activeSlide === i} title={i + 1} key={nanoid()}/>);

  return (
    <Swiper
      onSlideChange={(swiper) => setActiveSlide((swiper.activeIndex))}
      modules={[Autoplay]}
      autoplay={{
        delay: Delay.Slider,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      {slides}
      <div className="pagination">
        <ul className="pagination__list">
          {paginationList}
          <PaginationItem title={'Далее'}/>
        </ul>
      </div>
    </Swiper>
  );
}

export default BigBanner;
