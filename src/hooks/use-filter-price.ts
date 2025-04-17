import { useAppDispatch, useAppSelector } from '.';
import { selectSortedCameras } from '../store/cameras-process/cameras-process.selectors';
import { selectFilterState } from '../store/filter-process/filter-process.selectors';
import { changeMaxPrice, changeMinPrice } from '../store/filter-process/filter-process.slice';
import { CameraData } from '../types/cameras';
import { getMinAndMaxPricesFromCameras } from '../utils/cameras';
import { getMaxPrice, getMinPrice, getOnlyNumbersFromString } from '../utils/common';

type UseFilterPriceData = [
  handleMinPriceChange: () => void,
  handleMaxPriceChange: () => void,
  minMaxPrices: {
    min: number;
    max: number;
  }
]

type UseFilterPriceProps = {
  cameras: CameraData[];
  minPriceRef: React.RefObject<HTMLInputElement>;
  maxPriceRef: React.RefObject<HTMLInputElement>;
}

export const useFilterPrice = ({
  cameras,
  minPriceRef,
  maxPriceRef
}: UseFilterPriceProps): UseFilterPriceData => {
  const dispatch = useAppDispatch();
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

  return [handleMinPriceChange, handleMaxPriceChange, minMaxPrices];
};
