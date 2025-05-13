import { ChangeEvent, useState } from 'react';
import { BasketCameraData } from '../types/cameras';
import { BusketAmount } from '../const';

type UseProductAmountData = {
  handleAmountDecrease: () => void;
  handleAmountIncrease: () => void;
  handleAmountChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  currentAmount: number;
}

type UseProductAmountProps = {
  camera: BasketCameraData;
  onAmountChange: (vendorCode: string, amount: number) => void;
}

export const useProductAmount = ({ camera, onAmountChange }: UseProductAmountProps): UseProductAmountData => {
  const {
    vendorCode,
    amount
  } = camera;

  const [currentAmount, setCurrentAmount] = useState<number>(amount);

  const handleAmountDecrease = () => {
    if (amount === BusketAmount.Min) {
      return;
    }
    const updatedAmount = currentAmount - 1;

    setCurrentAmount(updatedAmount);
    onAmountChange(vendorCode, updatedAmount);
  };

  const handleAmountIncrease = () => {
    if (amount === BusketAmount.Max) {
      return;
    }
    const updatedAmount = currentAmount + 1;

    setCurrentAmount(updatedAmount);
    onAmountChange(vendorCode, updatedAmount);
  };

  const handleAmountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let updatedAmount = Number(evt.target.value);
    if (updatedAmount < 1) {
      updatedAmount = 1;
    }
    if (updatedAmount > 99) {
      updatedAmount = 99 ;
    }

    setCurrentAmount(updatedAmount);
    onAmountChange(vendorCode, updatedAmount);
  };

  return {
    handleAmountDecrease,
    handleAmountIncrease,
    handleAmountChange,
    currentAmount,
  };
};
