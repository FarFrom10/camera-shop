import { renderHook } from '@testing-library/react';
import { describe } from 'vitest';
import { useModalAddToBasket } from './use-modal-add-to-basket';
import { act } from 'react-dom/test-utils';
import { fakeCameras } from '../mocks/mock-test';

describe('Hook: useModalContactMe', () => {
  const fakeCurrentId = 666;
  const cameras = fakeCameras;

  it('should return object with 4 elements', () => {
    const { result } = renderHook(() => useModalAddToBasket({cameras}));
    const {
      modalAddToBasket,
      handleModalAddToBasketOpen,
      handleModalAddToBasketClose
    } = result.current;

    expect(Object.keys(result.current)).toHaveLength(4);
    expect(modalAddToBasket).toBeInstanceOf(Object);
    expect(typeof handleModalAddToBasketOpen).toBe('function');
    expect(typeof handleModalAddToBasketClose).toBe('function');
  });

  it('should be correctly change state with open modal', () => {
    const expectedState = {
      isOpen: true,
      currentId: fakeCurrentId
    };

    const { result } = renderHook(() => useModalAddToBasket({cameras}));
    const { handleModalAddToBasketOpen } = result.current;
    act(() => handleModalAddToBasketOpen(fakeCurrentId));
    const { modalAddToBasket } = result.current;

    expect(modalAddToBasket).toEqual(expectedState);
  });

  it('should be correctly change state with close modal', () => {
    const expectedState = {
      isOpen: false,
      currentId: null
    };

    const { result } = renderHook(() => useModalAddToBasket({cameras}));
    const { handleModalAddToBasketOpen, handleModalAddToBasketClose } = result.current;
    act(() => handleModalAddToBasketOpen(fakeCurrentId));
    act(() => handleModalAddToBasketClose());
    const { modalAddToBasket } = result.current;

    expect(modalAddToBasket).toEqual(expectedState);
  });
});
