import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectSortedCameras } from '../../../store/cameras-process/cameras-process.selectors';
import { selectFilterState } from '../../../store/filter-process/filter-process.selectors';
import { CameraData } from '../../../types/cameras';
import { getMinAndMaxPricesFromCameras } from '../../../utils/cameras';
import { getMaxPrice, getMinPrice, getOnlyNumbersFromString } from '../../../utils/common';
import { changeMaxPrice, changeMinPrice } from '../../../store/filter-process/filter-process.slice';

type CatalogFilterPriceProps = {
  cameras: CameraData[];
}

function CatalogFilterPrice({cameras}: CatalogFilterPriceProps): JSX.Element {
  const dispatch = useAppDispatch();
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

  const handleMinPriceChange = () => {
    const currentMinPrice = Number(getOnlyNumbersFromString(minPriceRef.current?.value || ''));
    const currentMaxPrice = Number(maxPriceRef.current?.value);
    const convertedPrice = getMinPrice(
      {
        currentMinPrice,
        currentMaxPrice,
        minPrice: minMaxPrices.min,
        maxPrice: minMaxPrices.max
      }
    );

    if(minPriceRef.current) {
      minPriceRef.current.value = convertedPrice;
      dispatch(changeMinPrice(convertedPrice));
    }
  };

  const handleMaxPriceChange = () => {
    const currentMaxPrice = Number(getOnlyNumbersFromString(maxPriceRef.current?.value || ''));
    const currentMinPrice = Number(minPriceRef.current?.value);
    const convertedPrice = getMaxPrice({
      currentMinPrice,
      currentMaxPrice,
      minPrice: minMaxPrices.min,
      maxPrice: minMaxPrices.max
    });

    if(maxPriceRef.current) {
      maxPriceRef.current.value = convertedPrice;
      dispatch(changeMaxPrice(convertedPrice));
    }
  };

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
