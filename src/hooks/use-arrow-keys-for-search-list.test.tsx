import { render, screen } from '@testing-library/react';
import { useRef } from 'react';
import { describe } from 'vitest';
import { useArrowKeysForSearchList } from './use-arrow-keys-for-search-list';
import { fakeCameras } from '../mocks/mock-test';
import { mockEmptyCallback, withRouter } from '../utils/mock-component';
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';
import * as mockComponent from '../utils/mock-component';

function TestComponent(){
  const testSearchInputRef = useRef(null);
  const testListRef = useRef(null);

  useArrowKeysForSearchList({
    searchListLength: fakeCameras.length,
    onInputReset: mockEmptyCallback,
    searchInputRef: testSearchInputRef,
    listRef: testListRef
  });

  const testCamerasList = fakeCameras.map((camera) => (
    <li key={camera.name}>
      <Link data-testid="testSearchListItemLink" tabIndex={0} to="#">
        Van Shot
      </Link>
    </li>
  ));

  return(
    <>
      <input
        ref={testSearchInputRef}
        data-testid="testSearchInput"
        type="text"
      />
      <ul
        ref={testListRef}
      >
        {testCamerasList}
      </ul>
    </>
  );
}

describe('Hook: useArrowKeysForSearchList', () => {
  const testSearchInput = 'testSearchInput';
  const testItemLinkId = 'testSearchListItemLink';

  it('input should have focus', async () => {
    render(withRouter(<TestComponent/>));
    const searchInputElement = screen.getByTestId(testSearchInput);
    await userEvent.click(searchInputElement);

    expect(searchInputElement).toHaveFocus();
  });

  it('first list item link should have focus after keydown "ArrowDown"', async () => {
    render(withRouter(<TestComponent/>));
    const searchInputElement = screen.getByTestId(testSearchInput);
    await userEvent.click(searchInputElement);
    await userEvent.keyboard('[ArrowDown]');
    const firstListElement = screen.getAllByTestId(testItemLinkId).at(0);

    expect(firstListElement).toHaveFocus();
  });

  it('input should have focus after keydown "ArrowUp", while first list item link have focus', async () => {
    render(withRouter(<TestComponent/>));
    const searchInputElement = screen.getByTestId(testSearchInput);
    await userEvent.click(searchInputElement);
    await userEvent.keyboard('[ArrowDown]');
    await userEvent.keyboard('[ArrowUp]');

    expect(searchInputElement).toHaveFocus();
  });

  it('should call "onInputReset" after keydown "Esc"', async () => {
    const fakeCallbackSpy = vi.spyOn(mockComponent, 'mockEmptyCallback');

    render(withRouter(<TestComponent/>));
    await userEvent.keyboard('[Escape]');

    expect(fakeCallbackSpy).toBeCalledTimes(1);
  });
});
