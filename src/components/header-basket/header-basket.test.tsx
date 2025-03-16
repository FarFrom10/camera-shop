import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import HeaderBasket from './header-basket';

describe('Component: HeaderBasket', () => {
  it('should render correctly', () => {
    const containerId = 'headerBasket';

    render(withRouter(<HeaderBasket/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
  });
});
