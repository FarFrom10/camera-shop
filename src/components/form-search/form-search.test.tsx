import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import FormSearch from './form-search';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: FormSearch', () => {
  it('should render correctly', () => {
    const containerId = 'formSearch';
    const {withStoreComponent} = withStore(
      <FormSearch />,
      makeFakeStore()
    );
    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
