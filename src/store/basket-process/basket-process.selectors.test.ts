import { NameSpace } from '../../const';
import { selectBasketItems, selectIsBasketLoading } from './basket-process.selectors';

describe('BasketProcess selectors', () => {
  const state = {
    [NameSpace.Basket]: {
      basketItems: [],

      isBasketLoading: false
    }
  };

  it('should return basketItems from state', () => {
    const { basketItems } = state[NameSpace.Basket];
    const result = selectBasketItems(state);
    expect(result).toBe(basketItems);
  });

  it('should return isBasketLoading from state', () => {
    const { isBasketLoading } = state[NameSpace.Basket];
    const result = selectIsBasketLoading(state);
    expect(result).toBe(isBasketLoading);
  });
});
