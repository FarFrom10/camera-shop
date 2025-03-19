import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../../utils/mock-component';
import ModalContactMe from './modal-contact-me';
import { fakeCurrentCamera } from '../../../mocks/mock-test';
import { PHONE_NUMBER_START, ServerConnectionStatusMessage } from '../../../const';
import userEvent from '@testing-library/user-event';

describe('Component: ModalContactMe', () => {
  const phoneInputId = 'modalContactMePhone';
  const fakeOnModalClose = () => null;

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <ModalContactMe
        camera={fakeCurrentCamera}
        onModalClose={fakeOnModalClose}
      />,
      {user: {
        isContactMeDataLoading: false
      }
      });

    render(withRouter(withStoreComponent));
    const phoneInputElement = screen.getByTestId(phoneInputId);

    expect(phoneInputElement).toBeInTheDocument();
  });

  it('should display phone input value correctly', async () => {
    const typedPhoneValue = '333';
    const expectedPhoneValue = `${PHONE_NUMBER_START}${typedPhoneValue}`;
    const {withStoreComponent} = withStore(
      <ModalContactMe
        camera={fakeCurrentCamera}
        onModalClose={fakeOnModalClose}
      />,
      {user: {
        isContactMeDataLoading: false
      }
      });

    render(withRouter(withStoreComponent));
    const phoneInputElement = screen.getByTestId(phoneInputId);
    await userEvent.type(
      phoneInputElement,
      typedPhoneValue
    );

    expect(screen.getByDisplayValue(expectedPhoneValue)).toBeInTheDocument();
  });

  it('should render message instead of component if "camera" is null', () => {
    const {withStoreComponent} = withStore(
      <ModalContactMe
        camera={null}
        onModalClose={fakeOnModalClose}
      />,
      {user: {
        isContactMeDataLoading: false
      }
      });

    render(withRouter(withStoreComponent));

    expect(screen.queryByTestId(phoneInputId)).not.toBeInTheDocument();
    expect(screen.getByText(ServerConnectionStatusMessage.Fail.camera)).toBeInTheDocument();
  });
});
