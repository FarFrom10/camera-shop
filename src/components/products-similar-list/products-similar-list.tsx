import { useMemo } from 'react';
import { CameraData } from '../../types/cameras';
import ProductCard from '../product-card/product-card';

type ProductsSimilarListProps = {
  similarCameras: CameraData[];
  onModalContactMeOpen: (id: number | null) => void;
}

function ProductsSimilarList({ similarCameras, onModalContactMeOpen }: ProductsSimilarListProps): JSX.Element {
  const similarCards = useMemo(() => similarCameras.map((camera) => <ProductCard onButtonClick={onModalContactMeOpen} camera={camera} key={camera.id}/>), [similarCameras, onModalContactMeOpen]);

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>

        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {similarCards}
          </div>

          <button
            className="slider-controls slider-controls--prev"
            type="button"
            aria-label="Предыдущий слайд"
            disabled
          >
            <svg width={7} height={12} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
          <button
            className="slider-controls slider-controls--next"
            type="button"
            aria-label="Следующий слайд"
          >
            <svg width={7} height={12} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductsSimilarList;
