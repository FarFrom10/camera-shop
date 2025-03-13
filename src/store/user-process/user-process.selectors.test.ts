import { NameSpace } from '../../const';
import { selectIsContactMeDataLoading } from './user-process.selectors';

describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.User]: {
      isContactMeDataLoading: false
    }
  };

  it('should return isContactMeDataLoading from state', () => {
    const { isContactMeDataLoading } = state[NameSpace.User];
    const result = selectIsContactMeDataLoading(state);
    expect(result).toBe(isContactMeDataLoading);
  });
});
