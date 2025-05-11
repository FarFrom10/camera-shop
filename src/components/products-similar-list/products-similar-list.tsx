import { CameraData } from '../../types/cameras';
import ProductCard from '../product-card/product-card';
import CommonIcon from '../common-icon/common-icon';
import { IconName, SIMILAR_CAMERAS_SLIDES_PER_VIEW } from '../../const';
import { Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type ProductsSimilarListProps = {
  similarCameras: CameraData[];
  onModalAddToBasketOpen: (id: number | null) => void;
}

function ProductsSimilarList({ similarCameras, onModalAddToBasketOpen }: ProductsSimilarListProps): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrevSlideChange = () => {
    if (!sliderRef.current) {
      return;
    }

    const currentIndex = activeSlide >= SIMILAR_CAMERAS_SLIDES_PER_VIEW
      ? activeSlide - SIMILAR_CAMERAS_SLIDES_PER_VIEW
      : 0;
    setActiveSlide(currentIndex);
    sliderRef.current.swiper.slideTo(currentIndex);
  };

  const handleNextSlideChange = () => {
    if (!sliderRef.current) {
      return;
    }

    const currentIndex = activeSlide <= similarCameras.length - SIMILAR_CAMERAS_SLIDES_PER_VIEW
      ? activeSlide + SIMILAR_CAMERAS_SLIDES_PER_VIEW
      : similarCameras.length - 1;

    setActiveSlide(currentIndex);
    sliderRef.current.swiper.slideTo(currentIndex);
  };

  const similarCards = similarCameras.map((camera) => (
    <SwiperSlide key={camera.id}>
      <ProductCard isSimilarProduct onButtonClick={onModalAddToBasketOpen} camera={camera}/>
    </SwiperSlide>
  ));

  return (
    <section data-testid='productsSimilarList' className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <button
            onMouseDown={handlePrevSlideChange}
            id='swiper-prev'
            data-testid='swiperPrev'
            className="slider-controls slider-controls--prev"
            type="button"
            aria-label="Предыдущий слайд"
          >
            <CommonIcon icon={IconName.ArrowSide}/>
          </button>

          <div className="product-similar__slider-list">
            <Swiper
              ref={sliderRef}
              modules={[Navigation]}
              navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
              style={{width: '100%', height: '100%'}}
              slidesPerView={SIMILAR_CAMERAS_SLIDES_PER_VIEW}
            >
              {similarCards}
            </Swiper>
          </div>

          <button
            onMouseDown={handleNextSlideChange}
            id='swiper-next'
            className="slider-controls slider-controls--next"
            type="button"
            aria-label="Следующий слайд"
          >
            <CommonIcon icon={IconName.ArrowSide}/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductsSimilarList;
