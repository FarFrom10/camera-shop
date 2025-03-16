import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import FooterNav from './footer-nav';

describe('Component: FooterNav', () => {
  it('should render correctly', () => {
    const containerId = 'footerNav';

    render(withRouter(<FooterNav/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
