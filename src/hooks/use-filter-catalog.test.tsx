import { describe, it, expect, vi } from 'vitest';
import { useAppDispatch, useAppSelector } from './index';
import { selectSortOrder, selectSortType } from '../store/sort-process/sort-process.selectors';
import { selectFilterState } from '../store/filter-process/filter-process.selectors';
import { updateSortedCameras } from '../store/cameras-process/cameras-process.slice';
import { CameraData } from '../types/cameras';
import { renderHook } from '@testing-library/react';
import { useFilterCatalog } from './use-filter-catalog';
import { fakeCameras } from '../mocks/mock-test';
import { SortByOrder, SortByType } from '../const';
import { FilterPrice } from '../types/types';
import { AppThunkDispatch } from '../types/mocks';

vi.mock('./index', () => ({
  useAppDispatch: vi.fn(() => vi.fn()),
  useAppSelector: vi.fn(),
}));

vi.mock('../store/sort-process/sort-process.selectors', () => ({
  selectSortOrder: vi.fn(),
  selectSortType: vi.fn(),
}));

vi.mock('../store/filter-process/filter-process.selectors', () => ({
  selectFilterState: vi.fn(),
}));

vi.mock('../utils/filter', () => ({
  getFilteredCameras: vi.fn((cameras: CameraData[]) => cameras),
  filterCamerasByPrice: vi.fn((cameras: CameraData[]) => cameras),
}));

vi.mock('../utils/sort', () => ({
  sortCamerasByType: vi.fn((cameras: CameraData[]) => cameras),
}));

describe('useFilterCatalog', () => {
  const mockDispatch: AppThunkDispatch = vi.fn();
  const mockCameras: CameraData[] = fakeCameras;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);
    vi.mocked(useAppSelector).mockImplementation((selector) => {
      if (selector === selectSortOrder) {
        return 'up' as SortByOrder;
      }
      if (selector === selectSortType) {
        return 'price' as SortByType;
      }
      if (selector === selectFilterState) {
        return { min: '0', max: '1000' } as FilterPrice;
      }
      return undefined;
    });
  });

  it('should filter and sort cameras correctly', () => {
    const { result } = renderHook(() => useFilterCatalog({ cameras: mockCameras }));

    expect(result.current[0]).toEqual(mockCameras);
    expect(useAppSelector).toHaveBeenCalledWith(selectSortOrder);
    expect(useAppSelector).toHaveBeenCalledWith(selectSortType);
    expect(useAppSelector).toHaveBeenCalledWith(selectFilterState);
  });

  it('should dispatch updateSortedCameras with sorted cameras', () => {
    renderHook(() => useFilterCatalog({ cameras: mockCameras }));

    expect(mockDispatch).toHaveBeenCalledWith(updateSortedCameras(mockCameras));
  });

  it('should memoize filtered cameras by price', () => {
    const { result, rerender } = renderHook(({ cameras }) => useFilterCatalog({ cameras }), {
      initialProps: { cameras: mockCameras },
    });

    const firstResult = result.current[0];
    rerender({ cameras: mockCameras });

    expect(result.current[0]).toEqual(firstResult);
  });
});
