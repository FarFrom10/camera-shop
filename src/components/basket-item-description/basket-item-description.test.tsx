import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import BasketItemDescription from './basket-item-description';
import { makeFakeStore } from '../../utils/mocks';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Component: BasketItemDescription', () => {
  const containerId = 'basketItemDescription';

  it('should render correctly', () => {

    const {withStoreComponent} = withStore(
      <BasketItemDescription camera={fakeCurrentCamera}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));


    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
  });
});
