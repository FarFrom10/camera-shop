import { render, screen } from '@testing-library/react';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from './empty-list-title';

describe('Component: EmptyListTitle', () => {
  it('should render correctly', () => {
    const expectedText = EmptyListMessage.Cameras;
    const titleTestId = 'empty-list-title';

    render(<EmptyListTitle message={expectedText}/>);
    const title = screen.getByTestId(titleTestId);

    expect(title).toBeInTheDocument();
  });
});
