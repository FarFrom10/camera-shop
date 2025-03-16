import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import Layout from './layout';

describe('Component: Layout', () => {
  it('should render correctly', () => {
    const containerId = 'layout';

    render(withRouter(<Layout/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
