import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ButtonMoreDetails from './button-more-details';

describe('Component: ButtonMoreDetails', () => {
  it('should render correctly', () => {
    const linkId = 'buttonMoreDetailsLink';

    render(withRouter(<ButtonMoreDetails route="/"/>));

    expect(screen.getByTestId(linkId)).toBeInTheDocument();
  });

  it('should render correctly with prop "isTransparent"', () => {
    const linkId = 'buttonMoreDetailsLink';

    render(withRouter(<ButtonMoreDetails route="/" isTransparent/>));

    expect(screen.getByTestId(linkId)).toBeInTheDocument();
    expect(screen.getByTestId(linkId)).toHaveClass('btn--transparent');
  });
});
