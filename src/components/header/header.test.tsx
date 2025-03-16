import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import Header from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const containerId = 'header';

    render(withRouter(<Header/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
