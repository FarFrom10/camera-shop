import { render, screen } from '@testing-library/react';
import ButtonUp from './button-up';
import userEvent from '@testing-library/user-event';

describe('Component: ButtonUp', () => {
  it('should render correctly', () => {
    render(<ButtonUp/>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should scroll when click on button', async () => {
    render(<ButtonUp/>);
    const scrollSpy = vi.spyOn(window, 'scrollTo');
    await userEvent.click(screen.getByRole('button'));

    expect(scrollSpy).toBeCalledTimes(1);
  });
});
