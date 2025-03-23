import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../../utils/mock-component';
import ModalWrapperContent from './modal-wrapper-content';
import userEvent from '@testing-library/user-event';
import * as mockComponent from '../../../utils/mock-component';

describe('Component: ModalWrapperContent', () => {
  const containerId = 'modalContent';
  const closeButtonId = 'modalCloseButton';
  const fakeChildrenId = 'fakeChildren';
  const fakeChildren = <div data-testid={fakeChildrenId}>children</div>;

  it('should render correctly', () => {
    render(withRouter(
      <ModalWrapperContent onModalClose={mockEmptyCallback}>
        {fakeChildren}
      </ModalWrapperContent>
    ));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should call "onModalClose" on close-button click', async () => {
    const fakeOnModalCloseSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(
      <ModalWrapperContent onModalClose={mockEmptyCallback}>
        {fakeChildren}
      </ModalWrapperContent>
    ));
    await userEvent.click(screen.getByTestId(closeButtonId));

    expect(fakeOnModalCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('should call "onModalClose" on "ESC" keydown', async () => {
    const fakeOnModalCloseSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(
      <ModalWrapperContent onModalClose={mockEmptyCallback}>
        {fakeChildren}
      </ModalWrapperContent>
    ));
    await userEvent.keyboard('{Escape}');

    expect(fakeOnModalCloseSpy).toHaveBeenCalledTimes(1);
  });
});
