import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ProductCard from './product-card';
import { fakeCurrentCamera } from '../../mocks/mock-test';

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    const containerId = 'productCardContainer';
    const testHandleButtonClick = (id: number | null) => id;

    render(withRouter(<ProductCard camera={fakeCurrentCamera} onButtonClick={testHandleButtonClick}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });

});
