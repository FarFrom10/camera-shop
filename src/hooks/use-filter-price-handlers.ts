import { useAppDispatch } from '.';
import { changeMaxPrice, changeMinPrice } from '../store/filter-process/filter-process.slice';
import { getMaxPrice, getMinPrice, getOnlyNumbersFromString } from '../utils/common';

type MinMaxPrices = {
  min: number;
  max: number;
}

type UseFilterPriceHandlersData = [
  handleMinPriceChange: () => void,
  handleMaxPriceChange: () => void
]

type UseFilterPriceHandlersProps = {
  minMaxPrices: MinMaxPrices;
  minPriceRef: React.RefObject<HTMLInputElement>;
  maxPriceRef: React.RefObject<HTMLInputElement>;
}

export const useFilterPriceHandlers = ({
  minMaxPrices,
  minPriceRef,
  maxPriceRef
}: UseFilterPriceHandlersProps): UseFilterPriceHandlersData => {
  const dispatch = useAppDispatch();

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

  return [handleMinPriceChange, handleMaxPriceChange];
};
