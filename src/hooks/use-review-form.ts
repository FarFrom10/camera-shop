import { useCallback, useState } from 'react';

type UseReviewFormData = {
  handleReviewFormOpen: () => void;
  handleReviewFormClose: () => void;
  showReviewForm: boolean;
}

export const useReviewForm = (): UseReviewFormData => {
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);

  const handleReviewFormOpen = useCallback(() => setShowReviewForm(true), []);
  const handleReviewFormClose = useCallback(() => setShowReviewForm(false), []);

  return {
    handleReviewFormOpen,
    handleReviewFormClose,
    showReviewForm,
  };
};
