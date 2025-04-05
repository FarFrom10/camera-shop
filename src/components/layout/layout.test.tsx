import { render, screen } from '@testing-library/react';
import Layout from './layout';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: Layout', () => {
  it('should render correctly', () => {
    const containerId = 'layout';

    const {withStoreComponent} = withStore(
      <Layout />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
