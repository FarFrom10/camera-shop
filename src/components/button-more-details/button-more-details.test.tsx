import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ButtonMoreDetails from './button-more-details';
import * as mockComponent from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';

describe('Component: ButtonMoreDetails', () => {
  const linkId = 'buttonMoreDetailsLink';
  const buttonId = 'buttonMoreDetails';

  it('should render correctly', () => {
    render(withRouter(<ButtonMoreDetails route="/"/>));

    expect(screen.getByTestId(linkId)).toBeInTheDocument();
  });

  it('element should have class "btn--transparent" with prop "isTransparent"', () => {
    render(withRouter(<ButtonMoreDetails route="/" isTransparent/>));

    expect(screen.getByTestId(linkId)).toBeInTheDocument();
    expect(screen.getByTestId(linkId)).toHaveClass('btn--transparent');
  });

  it('element should have class "modal__btn--half-width" with "isHalfWidth" prop', () => {
    render(withRouter(<ButtonMoreDetails route="/" isHalfWidth/>));

    expect(screen.getByTestId(linkId)).toHaveClass('modal__btn--half-width');
  });

  it('element should have role "button" if "isModal" prop is "true"', () => {
    render(withRouter(<ButtonMoreDetails route="/" isModal/>));

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('element should fire callback after click on it', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(
      <ButtonMoreDetails
        route="/"
        isModal
        onButtonClick={mockComponent.mockEmptyCallback}
      />
    ));
    const expectedElement = screen.getByTestId(buttonId);
    await userEvent.click(expectedElement);

    expect(fakeCallbackSpy).toBeCalledTimes(1);
  });
});
