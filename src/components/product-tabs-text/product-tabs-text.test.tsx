import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ProductTabsText from './product-tabs-text';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Component: ProductTabsText', () => {
  it('should render correctly', () => {
    const containerId = 'productTabsText';
    const expectedText = fakeCurrentCamera.description;

    render(withRouter(
      <ProductTabsText description={expectedText}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
