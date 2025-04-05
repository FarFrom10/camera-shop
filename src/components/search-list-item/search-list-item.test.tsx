import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import SearchListItem from './search-list-item';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Component: SearchListItem', () => {
  it('should render correctly', () => {
    const containerId = 'searchListItem';
    const expectedNameText = fakeCurrentCamera.name;

    render(withRouter(
      <SearchListItem camera={fakeCurrentCamera} onInputReset={mockEmptyCallback}/>
    ));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedNameText)).toBeInTheDocument();
  });
});
