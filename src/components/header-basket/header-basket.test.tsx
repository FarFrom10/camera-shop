import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import HeaderBasket from './header-basket';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: HeaderBasket', () => {
  it('should render correctly', () => {
    const containerId = 'headerBasket';
    const {withStoreComponent} = withStore(
      <HeaderBasket/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
