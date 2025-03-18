import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BasketItemMini from './basket-item-mini';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Component: BasketItemMini', () => {
  const containerId = 'basketItemMini';

  it('should render correctly', () => {
    render(withRouter(
      <BasketItemMini camera={fakeCurrentCamera}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
