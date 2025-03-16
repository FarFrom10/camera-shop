import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import HeaderNavLink from './header-nav-link';
import { AppRoute, RouteName } from '../../const';

describe('Component: HeaderNavLink', () => {
  it('should render correctly', () => {
    const containerId = 'headerNavItem';
    const expectedRoute = AppRoute.Index;
    const expectedText = RouteName[expectedRoute];

    render(withRouter(<HeaderNavLink route={expectedRoute}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
