import { renderHook } from '@testing-library/react';
import { useProductAmount } from './use-product-amount';
import {fakeBasketCamera } from '../mocks/mock-test';
import { act } from 'react-dom/test-utils';
import { BusketAmount } from '../const';

describe('useProductAmount', () => {
  const mockOnAmountChange = vi.fn();
  const mockCamera = fakeBasketCamera;

  it('should correctly return inital state and functions', () => {
    const { result } = renderHook(() => useProductAmount({
      camera: mockCamera,
      onAmountChange: mockOnAmountChange
    }));

    const {
      handleAmountDecrease,
      handleAmountIncrease,
      handleAmountChange,
      currentAmount,
    } = result.current;

    expect(currentAmount).toBe(mockCamera.amount);
    expect(typeof handleAmountDecrease).toBe('function');
    expect(typeof handleAmountIncrease).toBe('function');
    expect(typeof handleAmountChange).toBe('function');
  });

  it('should increase amount correctly', () => {
    const { result } = renderHook(() =>
      useProductAmount({
        camera: mockCamera,
        onAmountChange: mockOnAmountChange,
      })
    );

    act(() => result.current.handleAmountIncrease());
    expect(result.current.currentAmount).toBe(mockCamera.amount + 1);
  });

  it('should NOT decrease "currentAmount" state value with "handleAmountDecrease" function, if "currentAmount" value is "BusketAmount.Min"', () => {
    const { result } = renderHook(() => useProductAmount({
      camera: mockCamera,
      onAmountChange: mockOnAmountChange
    }));

    act(() => result.current.handleAmountDecrease());
    expect(result.current.currentAmount).toBe(mockCamera.amount);
  });

  it('should NOT increase "currentAmount" state value with "handleAmountDecrease" function, if "currentAmount" value is "BusketAmount.Max"', () => {
    const { result } = renderHook(() => useProductAmount({
      camera: mockCamera,
      onAmountChange: mockOnAmountChange
    }));

    //Change currentAmount to BusketAmount.Max
    const mockEvent = {
      target: { value: `${BusketAmount.Max}`},
    } as React.ChangeEvent<HTMLInputElement>;
    act(() => result.current.handleAmountChange(mockEvent));
    expect(result.current.currentAmount).toBe(BusketAmount.Max);

    act(() => result.current.handleAmountIncrease());
    expect(result.current.currentAmount).toBe(BusketAmount.Max);
  });

  it('should decrease amount correctly after increase', () => {
    const { result } = renderHook(() =>
      useProductAmount({
        camera: mockCamera,
        onAmountChange: mockOnAmountChange,
      })
    );

    // Increase
    act(() => result.current.handleAmountIncrease());
    expect(result.current.currentAmount).toBe(mockCamera.amount + 1);

    // Decrease
    act(() => result.current.handleAmountDecrease());
    expect(result.current.currentAmount).toBe(mockCamera.amount);
  });

  it('should update "amount" with "handleAmountChange" function', () => {
    const { result } = renderHook(() =>
      useProductAmount({
        camera: mockCamera,
        onAmountChange: mockOnAmountChange,
      })
    );

    const mockEvent = {
      target: { value: `${mockCamera.amount + 5}`},
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => result.current.handleAmountChange(mockEvent));
    expect(result.current.currentAmount).toBe(mockCamera.amount + 5);
  });
});
