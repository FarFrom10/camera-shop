import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ScrollToTop from './scroll-to-top';

describe('Component: ScrollToTop', () => {
  const fakeChildrenId = 'fakeChildren';
  const fakeChildren = <div data-testid={fakeChildrenId}>children</div>;

  it('should render children correctly', () => {
    render(withRouter(
      <ScrollToTop>
        {fakeChildren}
      </ScrollToTop>
    ));

    expect(screen.getByTestId(fakeChildrenId)).toBeInTheDocument();
  });
});
