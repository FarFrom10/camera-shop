import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';

type UseModalBasketSuccessData = {
  handleModalBasketSuccessOpen: () => void;
  handleModalBasketSuccessClose: () => void;
  handleNavigateToCatalog: () => void;
  showBasketSuccess: boolean;
}

export const useModalBasketSuccess = (): UseModalBasketSuccessData => {
  const navigate = useNavigate();
  const [showBasketSuccess, setShowBasketSuccess] = useState<boolean>(false);

  const handleModalBasketSuccessOpen = useCallback(() => setShowBasketSuccess(true), []);
  const handleModalBasketSuccessClose = useCallback(() => setShowBasketSuccess(false), []);
  const handleNavigateToCatalog = useCallback(() => {
    setShowBasketSuccess(false);
    navigate(AppRoute.Index);
  }, [navigate]);

  return {
    handleModalBasketSuccessOpen,
    handleModalBasketSuccessClose,
    handleNavigateToCatalog,
    showBasketSuccess
  };
};
