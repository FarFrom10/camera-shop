import { render, screen } from '@testing-library/react';
import { ModalTitle } from '../../../const';
import { mockEmptyCallback, withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import ModalBasketSuccess from './modal-basket-success';

describe('Component: ModalBasketSuccess', () => {
  it('should render correctly', () => {
    const expectedText = ModalTitle.SuccessfullyAdded;
    const {withStoreComponent} = withStore(
      <ModalBasketSuccess
        titleText={expectedText}
        onModalClose={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render only 1 button with "isSingleButton" prop', () => {
    const buttonsContainerId = 'modalBasketSuccessButtons';
    const {withStoreComponent} = withStore(
      <ModalBasketSuccess
        titleText={ModalTitle.SuccessfullyAdded}
        onModalClose={mockEmptyCallback}
        isSingleButton
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(buttonsContainerId).children).toHaveLength(1);
  });
});
