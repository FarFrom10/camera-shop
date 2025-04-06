import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import Breadcrumbs from './breadcrumbs';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: Breadcrumbs', () => {
  const containerId = 'breadcrumbs';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <Breadcrumbs />,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
