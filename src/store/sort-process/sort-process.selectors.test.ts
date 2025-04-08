import { NameSpace, SortByOrder, SortByType } from '../../const';
import { selectSortOrder, selectSortType } from './sort-process.selectors';

describe('SortProcess selectors', () => {
  const state = {
    [NameSpace.Sort]: {
      sortType: SortByType.Price,
      sortOrder: SortByOrder.Up,
    }
  };

  it('should return "sortType" from state', () => {
    const { sortType } = state[NameSpace.Sort];
    const result = selectSortType(state);
    expect(result).toStrictEqual(sortType);
  });

  it('should return "sortOrder" from state', () => {
    const { sortOrder } = state[NameSpace.Sort];
    const result = selectSortOrder(state);
    expect(result).toStrictEqual(sortOrder);
  });
});
