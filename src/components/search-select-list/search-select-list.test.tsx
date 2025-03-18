import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import SearchSelectList from './search-select-list';

describe('Component: SearchSelectList', () => {
  const containerId = 'searchSelectList';

  it('should render correctly', () => {
    render(withRouter(
      <SearchSelectList />));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
