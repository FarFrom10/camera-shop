import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BigBanner from './big-banner';
import { fakePromoCameras } from '../../mocks/mock-test';

describe('Component: BigBanner', () => {
  it('should "promoCameras" render correctly', () => {
    render(withRouter(<BigBanner promoCameras={fakePromoCameras}/>));

    expect(screen.getByText(fakePromoCameras[0].name)).toBeInTheDocument();
  });
});
