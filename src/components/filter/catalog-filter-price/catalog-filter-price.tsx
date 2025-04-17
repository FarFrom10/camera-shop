import { useRef } from 'react';
import { useAppSelector } from '../../../hooks';
import { selectSortedCameras } from '../../../store/cameras-process/cameras-process.selectors';
import { selectFilterState } from '../../../store/filter-process/filter-process.selectors';
import { CameraData } from '../../../types/cameras';
import { getMinAndMaxPricesFromCameras } from '../../../utils/cameras';
import { useFilterPriceHandlers } from '../../../hooks/use-filter-price-handlers';

type CatalogFilterPriceProps = {
  cameras: CameraData[];
}

function CatalogFilterPrice({cameras}: CatalogFilterPriceProps): JSX.Element {
  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const sortedCameras = useAppSelector(selectSortedCameras);
  const wholeFilterState = useAppSelector(selectFilterState);
  const isFiltersUsed = [
    ...Object.values(wholeFilterState.cameraType),
    ...Object.values(wholeFilterState.level),
  ].some((item) => item === true) || wholeFilterState.category !== null;

  const minMaxPrices = !isFiltersUsed
    ? getMinAndMaxPricesFromCameras(cameras)
    : getMinAndMaxPricesFromCameras(sortedCameras);

  const [handleMinPriceChange, handleMaxPriceChange] = useFilterPriceHandlers({
    minMaxPrices,
    minPriceRef,
    maxPriceRef
  });

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              ref={minPriceRef}
              onBlur={handleMinPriceChange}
              type="number"
              name="price"
              placeholder={`от ${minMaxPrices.min}`}
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
              placeholder={`до ${minMaxPrices.max}`}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
