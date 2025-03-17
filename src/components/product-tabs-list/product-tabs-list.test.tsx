import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import ProductTabsList from './product-tabs-list';

describe('Component: ProductTabsList', () => {
  it('should render correctly', () => {
    const containerId = 'productTabsList';
    const {
      vendorCode,
      type,
      category,
      level,
    } = fakeCurrentCamera;

    render(withRouter(
      <ProductTabsList camera={fakeCurrentCamera}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(vendorCode)).toBeInTheDocument();
    expect(screen.getByText(type)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(level)).toBeInTheDocument();
  });
});
