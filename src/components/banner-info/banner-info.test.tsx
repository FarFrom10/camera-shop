import { render, screen } from '@testing-library/react';
import BannerInfo from './banner-info';
import { withRouter } from '../../utils/mock-component';

describe('Component: BannerInfo', () => {
  it('should render correctly with props: "id", "name"', () => {
    const fakeId = '666';
    const fakeName = 'test';
    const containerId = 'bannerInfoContainer';

    render(withRouter(<BannerInfo id={fakeId} name={fakeName}/>));


    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(fakeName)).toBeInTheDocument();
  });
});
