import { SortByOrder, SortByType } from '../../const';
import { changeSortOrder, changeSortType, sortProcess } from './sort-process.slice';

describe('SortProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sortType: SortByType.Price,
      sortOrder: SortByOrder.Up,
    };

    const result = sortProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
      sortType: SortByType.Price,
      sortOrder: SortByOrder.Up,
    };

    const result = sortProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change "sortType" with "changeSortType" action', () => {
    const expectedState = {
      sortType: SortByType.Popular,
      sortOrder: SortByOrder.Up,
    };

    const result = sortProcess.reducer(undefined, changeSortType(SortByType.Popular));

    expect(result).toEqual(expectedState);
  });

  it('should change "sortOrder" with "changeSortOrder" action', () => {
    const expectedState = {
      sortType: SortByType.Price,
      sortOrder: SortByOrder.Down,
    };

    const result = sortProcess.reducer(undefined, changeSortOrder(SortByOrder.Down));

    expect(result).toEqual(expectedState);
  });
});
