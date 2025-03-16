import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import SocialItem from './social-item';
import { SocialsNames } from '../../const';

describe('Component: SocialItem', () => {
  it('should render correctly', () => {
    const itemId = 'socialItem';
    const itemLinkId = 'socialItemLink';
    const iconId = 'socialItemIcon';
    const expectedName = SocialsNames[0];
    const expectedLabelText = `Переход на страницу ${expectedName}`;
    const expectedIconText = `#icon-${expectedName}`;

    render(withRouter(<SocialItem name={expectedName}/>));

    expect(screen.getByTestId(itemId)).toBeInTheDocument();
    expect(screen.getByTestId(itemLinkId)).toBeInTheDocument();
    expect(screen.getByTestId(itemLinkId)).toHaveAttribute('aria-label', expectedLabelText);
    expect(screen.getByTestId(iconId)).toBeInTheDocument();
    expect(screen.getByTestId(iconId)).toHaveAttribute('xlink:href', expectedIconText);
  });
});
