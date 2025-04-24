import { FilterCategory } from '../../const';
import { changeCameraType, changeCatalogCurrentPage, changeCategory, changeLevel, changeMaxPrice, changeMinPrice, filterProcess, resetFilters } from './filter-process.slice';

describe('filterProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
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
    };

    const result = filterProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () =>{
    const emptyAction = { type: '' };
    const expectedState = {
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
    };

    const result = filterProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change "price.min" with "changeMinPrice" action', () => {
    const expectedMinPrice = '666';
    const expectedState = {
      price: {
        min: expectedMinPrice,
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
    };

    const result = filterProcess.reducer(undefined, changeMinPrice(expectedMinPrice));

    expect(result).toEqual(expectedState);
  });

  it('should change "price.max" with "changeMaxPrice" action', () => {
    const expectedMaxPrice = '666';
    const expectedState = {
      price: {
        min: '',
        max: expectedMaxPrice
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
    };

    const result = filterProcess.reducer(undefined, changeMaxPrice(expectedMaxPrice));

    expect(result).toEqual(expectedState);
  });

  it('should change "category" with "changeCategory" action', () => {
    const expectedCategory = FilterCategory.Photocamera;
    const expectedState = {
      price: {
        min: '',
        max: ''
      },
      category: expectedCategory,
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
    };

    const result = filterProcess.reducer(undefined, changeCategory(expectedCategory));

    expect(result).toEqual(expectedState);
  });

  it('should change "cameraType" with "changeCameraType" action', () => {
    const expectedCameraType = {
      digital: true,
      film: true,
      snapshot: false,
      collection: false,
    };
    const expectedState = {
      price: {
        min: '',
        max: ''
      },
      category: null,
      cameraType: expectedCameraType,
      level: {
        zero: false,
        nonProfessional: false,
        professional: false,
      },
      catalogCurrentPage: 1
    };

    const result = filterProcess.reducer(undefined, changeCameraType(expectedCameraType));

    expect(result).toEqual(expectedState);
  });

  it('should change "level" with "changeLevel" action', () => {
    const expectedLevel = {
      zero: true,
      nonProfessional: false,
      professional: true,
    };
    const expectedState = {
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
      level: expectedLevel,
      catalogCurrentPage: 1
    };

    const result = filterProcess.reducer(undefined, changeLevel(expectedLevel));

    expect(result).toEqual(expectedState);
  });

  it('should reset state with "resetFilters" action after change state with some action', () => {
    const expectedState = {
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
    };

    filterProcess.reducer(undefined, changeMinPrice('666'));
    const result = filterProcess.reducer(undefined, resetFilters());

    expect(result).toEqual(expectedState);
  });

  it('should change "cameraType.film" and "cameraType.snapshot" with "resetUnavailableTypesForVideo" action after change "cameraType"', () => {
    const expectedState = {
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
    };

    filterProcess.reducer(undefined, changeCameraType({
      digital: false,
      film: true,
      snapshot: true,
      collection: false,
    }));
    const result = filterProcess.reducer(undefined, resetFilters());

    expect(result).toEqual(expectedState);
  });

  it('should change "catalogCurrentPage" with "changeCatalogCurrentPage" action', () => {
    const expectedState = {
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
      catalogCurrentPage: 2
    };

    const result = filterProcess.reducer(undefined, changeCatalogCurrentPage(2));

    expect(result).toEqual(expectedState);
  });
});
