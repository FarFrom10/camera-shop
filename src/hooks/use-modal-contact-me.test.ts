import { renderHook } from '@testing-library/react';
import { describe } from 'vitest';
import { useModalContactMe } from './use-modal-contact-me';
import { act } from 'react-dom/test-utils';
import { fakeCameras } from '../mocks/mock-test';

describe('Hook: useModalContactMe', () => {
  const fakeCurrentId = 666;
  const cameras = fakeCameras;

  it('should return array with 4 elements', () => {
    const { result } = renderHook(() => useModalContactMe({cameras}));
    const [modalContactMe, handleModalContactMeOpen, handleModalContactMeClose] = result.current;

    expect(result.current).toHaveLength(4);
    expect(modalContactMe).toBeInstanceOf(Object);
    expect(typeof handleModalContactMeOpen).toBe('function');
    expect(typeof handleModalContactMeClose).toBe('function');
  });

  it('should be correctly change state with open modal', () => {
    const expectedState = {
      isOpen: true,
      currentId: fakeCurrentId
    };

    const { result } = renderHook(() => useModalContactMe({cameras}));
    const [,handleModalContactMeOpen] = result.current;
    act(() => handleModalContactMeOpen(fakeCurrentId));
    const [modalContactMe] = result.current;

    expect(modalContactMe).toEqual(expectedState);
  });

  it('should be correctly change state with close modal', () => {
    const expectedState = {
      isOpen: false,
      currentId: null
    };

    const { result } = renderHook(() => useModalContactMe({cameras}));
    const [,handleModalContactMeOpen, handleModalContactMeClose] = result.current;
    act(() => handleModalContactMeOpen(fakeCurrentId));
    act(() => handleModalContactMeClose());
    const [modalContactMe] = result.current;

    expect(modalContactMe).toEqual(expectedState);
  });
});
