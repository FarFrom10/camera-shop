import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import { fakeCurrentCamera } from '../../mocks/mock-test';

import ProductPageInfo from './product-page-info';

describe('Component: ProductPageInfo', () => {
  it('should render correctly', () => {
    const containerId = 'productPageInfo';
    const expectedText = fakeCurrentCamera.name;

    render(withRouter(<ProductPageInfo camera={fakeCurrentCamera}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
