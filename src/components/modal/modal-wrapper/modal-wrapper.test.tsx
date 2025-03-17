import { render, screen } from '@testing-library/react';
import ModalWrapper from './modal-wrapper';
import { mockEmptyCallback, withRouter } from '../../../utils/mock-component';
import * as mockComponent from '../../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: ModalWrapper', () => {
  const containerId = 'modalWrapper';
  const overlayId = 'modalWrapperOverlay';
  const fakeChildrenId = 'fakeChildren';
  const fakeChildren = <div data-testid={fakeChildrenId}>children</div>;

  it('should render correctly and not have chldren', () => {
    const fakeShowModal = false;

    render(withRouter(
      <ModalWrapper onModalClose={mockEmptyCallback} isActive={fakeShowModal}>
        {fakeChildren}
      </ModalWrapper>
    ));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId)).not.toHaveClass('is-active');
    expect(screen.queryByTestId(fakeChildrenId)).not.toBeInTheDocument();
  });

  it('should have children', () => {
    const fakeShowModal = true;

    render(withRouter(
      <ModalWrapper onModalClose={mockEmptyCallback} isActive={fakeShowModal}>
        {fakeChildren}
      </ModalWrapper>
    ));

    expect(screen.getByTestId(containerId)).toHaveClass('is-active');
    expect(screen.getByTestId(fakeChildrenId)).toBeInTheDocument();
  });

  it('should call "onModalClose" on overlay click', async () => {
    const fakeShowModal = true;
    const fakeOnModalCloseSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(
      <ModalWrapper onModalClose={mockEmptyCallback} isActive={fakeShowModal}>
        {fakeChildren}
      </ModalWrapper>
    ));
    await userEvent.click(screen.getByTestId(overlayId));

    expect(fakeOnModalCloseSpy).toHaveBeenCalledTimes(1);
  });
});
