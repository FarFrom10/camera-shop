import { render, screen } from '@testing-library/react';
import { ModalTitle, ServerConnectionStatusMessage } from '../../../const';
import { fakeCurrentCamera } from '../../../mocks/mock-test';
import { mockEmptyCallback, withRouter, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import ModalRemoveItem from './modal-remove-item';

describe('Component: ModalRemoveItem', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ModalRemoveItem
        camera={fakeCurrentCamera}
        onModalClose={mockEmptyCallback}
        onProductRemove={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(ModalTitle.RemoveItemConfirm)).toBeInTheDocument();
  });

  it('should render error message if "camera" is "null"', () => {
    const {withStoreComponent} = withStore(
      <ModalRemoveItem
        camera={null}
        onModalClose={mockEmptyCallback}
        onProductRemove={mockEmptyCallback}
      />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(ServerConnectionStatusMessage.Fail.camera)).toBeInTheDocument();
  });
});
