import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import SearchSelectList from './search-select-list';
import { fakeCameras } from '../../mocks/mock-test';
import { useRef } from 'react';
import { EMPTY_SEARCH_LIST_TEXT } from '../../const';
import { CameraData } from '../../types/cameras';

describe('Component: SearchSelectList', () => {
  const containerId = 'searchSelectList';

  type TestComopnentProps = {
    cameras: CameraData[];
  }

  function TestComopnent({cameras}:TestComopnentProps){
    const testSearchInputRef = useRef(null);
    return(
      <>
        <input
          ref={testSearchInputRef}
          data-testid="testSearchInput"
          className="form-search__input"
          type="text"
        />
        <SearchSelectList
          isVisible
          cameras={cameras}
          onInputReset={mockEmptyCallback}
          searchInputRef={testSearchInputRef}
        />
      </>
    );
  }

  it('should render correctly', () => {
    render(withRouter(
      <TestComopnent cameras={fakeCameras}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

  it('should show empty list message if "cameras" length is "0" ', () => {
    render(withRouter(
      <TestComopnent cameras={[]}/>));

    expect(screen.getByText(EMPTY_SEARCH_LIST_TEXT)).toBeInTheDocument();
  });
});
