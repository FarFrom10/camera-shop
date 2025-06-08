import { ChangeEvent, useState } from 'react';
import { BasketItemData } from '../types/cameras';
import { BusketAmount } from '../const';

type UseProductAmountData = {
  handleAmountDecrease: () => void;
  handleAmountIncrease: () => void;
  handleAmountChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  currentAmount: number;
}

type UseProductAmountProps = {
  camera: BasketItemData;
  onAmountChange: (id: number, amount: number) => void;
}

export const useProductAmount = ({ camera, onAmountChange }: UseProductAmountProps): UseProductAmountData => {
  const {
    id,
    amount
  } = camera;

  const [currentAmount, setCurrentAmount] = useState<number>(amount);

  const handleAmountDecrease = () => {
    if (currentAmount === BusketAmount.Min) {
      return;
    }
    const updatedAmount = currentAmount - 1;

    setCurrentAmount(updatedAmount);
    onAmountChange(id, updatedAmount);
  };

  const handleAmountIncrease = () => {
    if (currentAmount === BusketAmount.Max) {
      return;
    }
    const updatedAmount = currentAmount + 1;

    setCurrentAmount(updatedAmount);
    onAmountChange(id, updatedAmount);
  };

  const handleAmountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let updatedAmount = Number(evt.target.value);
    if (updatedAmount < BusketAmount.Min) {
      updatedAmount = BusketAmount.Min;
    }
    if (updatedAmount > BusketAmount.Max) {
      updatedAmount = BusketAmount.Max ;
    }

    setCurrentAmount(updatedAmount);
    onAmountChange(id, updatedAmount);
  };

  return {
    handleAmountDecrease,
    handleAmountIncrease,
    handleAmountChange,
    currentAmount,
  };
};
