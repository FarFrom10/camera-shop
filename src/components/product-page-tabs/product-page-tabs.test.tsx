import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import ProductPageTabs from './product-page-tabs';

describe('Component: ProductPageTabs', () => {
  it('should render correctly', () => {
    const containerId = 'productTabs';

    render(withRouter(<ProductPageTabs camera={fakeCurrentCamera}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
