import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';
type UseModalAddedToBasketData = {
  handleModalAddedToBasketOpen: () => void;
  handleModalAddedToBasketClose: () => void;
  handleNavigateToCatalog: () => void;
  showAddedToBasket: boolean;
}

export const useModalAddedToBasket = (): UseModalAddedToBasketData => {
  const navigate = useNavigate();
  const [showAddedToBasket, setShowAddedToBasket] = useState<boolean>(false);

  const handleModalAddedToBasketOpen = useCallback(() => setShowAddedToBasket(true), []);
  const handleModalAddedToBasketClose = useCallback(() => setShowAddedToBasket(false), []);
  const handleNavigateToCatalog = useCallback(() => {
    setShowAddedToBasket(false);
    navigate(AppRoute.Index);
  }, [navigate]);

  return {
    handleModalAddedToBasketOpen,
    handleModalAddedToBasketClose,
    handleNavigateToCatalog,
    showAddedToBasket
  };
};
