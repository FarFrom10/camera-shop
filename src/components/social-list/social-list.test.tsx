import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import SocialList from './social-list';
import { SocialsNames } from '../../const';

describe('Component: SocialList', () => {
  it('should render correctly', () => {
    const containerId = 'socialList';

    render(withRouter(<SocialList/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId).children).toHaveLength(SocialsNames.length);
  });
});
