import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import HeaderNav from './header-nav';

describe('Component: HeaderNav', () => {
  it('should render correctly', () => {
    render(withRouter(<HeaderNav/>));

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
