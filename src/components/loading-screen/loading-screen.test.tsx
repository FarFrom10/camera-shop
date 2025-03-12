import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const expectedText = /Loading/i;

    render(<LoadingScreen />);
    const imageElement = screen.getByAltText(expectedText);

    expect(imageElement).toHaveAttribute('src', 'img/spinner.png');
    expect(imageElement).toBeInTheDocument();
  });
});
