import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import FormSearch from './form-search';

describe('Component: FormSearch', () => {
  it('should render correctly', () => {
    const containerId = 'formSearch';

    render(withRouter(<FormSearch/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
