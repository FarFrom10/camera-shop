import { memo, useRef } from 'react';
import { CameraData } from '../../../types/cameras';
import { useFilterPrice } from '../../../hooks/use-filter-price';

type CatalogFilterPriceProps = {
  cameras: CameraData[];
  currentMinPrice: string;
  currentMaxPrice: string;
}

function CatalogFilterPriceTemplate({cameras, currentMinPrice, currentMaxPrice}: CatalogFilterPriceProps): JSX.Element {
  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const [
    handleMinPriceChange,
    handleMaxPriceChange,
    minMaxPrices
  ] = useFilterPrice({
    cameras,
    minPriceRef,
    maxPriceRef
  });

  return (
    <fieldset data-testid='catalogFilterPrice' className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              ref={minPriceRef}
              onBlur={handleMinPriceChange}
              type="number"
              name="price"
              placeholder={`${minMaxPrices.min}`}
              defaultValue={currentMinPrice ? currentMinPrice : ''}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              ref={maxPriceRef}
              onBlur={handleMaxPriceChange}
              type="number"
              name="priceUp"
              placeholder={`${minMaxPrices.max}`}
              defaultValue={currentMaxPrice ? currentMaxPrice : ''}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

const CatalogFilterPrice = memo(CatalogFilterPriceTemplate);

export default CatalogFilterPrice;
