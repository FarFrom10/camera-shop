import { render, screen } from '@testing-library/react';
import ModalAddToBasket from './modal-add-to-basket';
import { ModalTitle } from '../../../const';
import { fakeCurrentCamera } from '../../../mocks/mock-test';
import { mockEmptyCallback, withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';

describe('Component: ModalAddToBasket', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ModalAddToBasket
        camera={fakeCurrentCamera}
        onModalClose={mockEmptyCallback}
        onModalAddedToBasketOpen={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(ModalTitle.AddToBasket)).toBeInTheDocument();
  });
});
