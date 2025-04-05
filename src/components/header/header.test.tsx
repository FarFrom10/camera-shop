import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import Header from './header';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const containerId = 'header';

    const {withStoreComponent} = withStore(
      <Header />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
