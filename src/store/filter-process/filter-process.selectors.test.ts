import { NameSpace } from '../../const';
import { selectCatalogCurrentPage, selectFilterCameraType, selectFilterCategory, selectFilterLevel, selectFilterState } from './filter-process.selectors';


describe('FilterProcess selectors', () => {
  const state = {
    [NameSpace.Filter]: {
      price: {
        min: '',
        max: ''
      },
      category: null,
      cameraType: {
        digital: false,
        film: false,
        snapshot: false,
        collection: false,
      },
      level: {
        zero: false,
        nonProfessional: false,
        professional: false,
      },
      catalogCurrentPage: 1
    }
  };

  it('should return whole state from state', () => {
    const wholeState = state[NameSpace.Filter];
    const result = selectFilterState(state);
    expect(result).toStrictEqual(wholeState);
  });

  it('should return "category" from state', () => {
    const { category } = state[NameSpace.Filter];
    const result = selectFilterCategory(state);
    expect(result).toStrictEqual(category);
  });

  it('should return "cameraType" from state', () => {
    const { cameraType } = state[NameSpace.Filter];
    const result = selectFilterCameraType(state);
    expect(result).toStrictEqual(cameraType);
  });

  it('should return "level" from state', () => {
    const { level } = state[NameSpace.Filter];
    const result = selectFilterLevel(state);
    expect(result).toStrictEqual(level);
  });

  it('should return "catalogCurrentPage" from state', () => {
    const { catalogCurrentPage } = state[NameSpace.Filter];
    const result = selectCatalogCurrentPage(state);
    expect(result).toStrictEqual(catalogCurrentPage);
  });
});
