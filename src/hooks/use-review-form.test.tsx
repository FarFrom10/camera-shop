import { act, renderHook } from '@testing-library/react';
import { useReviewForm } from './use-review-form';

describe('useReviewForm', () => {
  it ('should correctly return inital state and functions', () => {
    const { result } = renderHook(() => useReviewForm());
    const {
      handleReviewFormOpen,
      handleReviewFormClose,
      showReviewForm
    } = result.current;

    expect(showReviewForm).toBe(false);
    expect(typeof handleReviewFormOpen).toBe('function');
    expect(typeof handleReviewFormClose).toBe('function');
  });

  it('should change "showReviewForm" state to "true" with "handleReviewFormOpen" function', () => {
    const { result } = renderHook(() => useReviewForm());
    const {
      handleReviewFormOpen,
    } = result.current;

    act(() => handleReviewFormOpen());

    expect(result.current.showReviewForm).toBe(true);
  });

  it('should change "showReviewForm" state to "false" with "handleReviewFormClose" function', () => {
    const { result } = renderHook(() => useReviewForm());
    const {
      handleReviewFormOpen,
      handleReviewFormClose
    } = result.current;

    act(() => {
      handleReviewFormOpen();
      handleReviewFormClose();
    });

    expect(result.current.showReviewForm).toBe(false);
  });

  it('returnging functions should be the same between renders', () => {
    const { result, rerender } = renderHook(() => useReviewForm());
    const firstOpenFn = result.current.handleReviewFormOpen;
    const firstCloseFn = result.current.handleReviewFormClose;

    rerender();

    expect(result.current.handleReviewFormOpen).toBe(firstOpenFn);
    expect(result.current.handleReviewFormClose).toBe(firstCloseFn);
  });
});
