import { render, screen } from '@testing-library/react';
import { ModalTitle } from '../../../const';
import { mockEmptyCallback, withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import ModalBasketSuccess from './modal-basket-success';

describe('Component: ModalBasketSuccess', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ModalBasketSuccess
        onModalClose={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(ModalTitle.SuccessfullyAdded)).toBeInTheDocument();
  });

  it('should render changed title text with "isOrder" prop', () => {
    const {withStoreComponent} = withStore(
      <ModalBasketSuccess
        onModalClose={mockEmptyCallback}
        isOrder
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.queryByText(ModalTitle.SuccessfullyAdded)).not.toBeInTheDocument();
  });
});
