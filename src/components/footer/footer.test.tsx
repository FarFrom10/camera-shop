import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const footerId = 'footer';

    render(withRouter(<Footer/>));

    expect(screen.getByTestId(footerId)).toBeInTheDocument();
  });
});
