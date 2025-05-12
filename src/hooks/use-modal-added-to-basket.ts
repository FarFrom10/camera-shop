import { useCallback, useState } from 'react';
type UseModalAddedToBasketData = [
  handleModalAddedToBasketOpen: () => void,
  handleModalAddedToBasketClose: () => void,
  showAddedToBasket: boolean
]

export const useModalAddedToBasket = (): UseModalAddedToBasketData => {
  const [showAddedToBasket, setShowAddedToBasket] = useState<boolean>(false);

  const handleModalAddedToBasketOpen = useCallback(() => setShowAddedToBasket(true), []);
  const handleModalAddedToBasketClose = useCallback(() => setShowAddedToBasket(false), []);

  return [
    handleModalAddedToBasketOpen,
    handleModalAddedToBasketClose,
    showAddedToBasket
  ];
};
