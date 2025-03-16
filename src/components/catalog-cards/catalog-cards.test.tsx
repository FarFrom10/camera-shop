import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import CatalogCards from './catalog-cards';
import { fakeCameras } from '../../mocks/mock-test';

describe('Component: CatalogCards', () => {
  const containerId = 'catalogCardsContainer';

  it('should render correctly', () => {
    render(withRouter(<CatalogCards cameras={fakeCameras}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId).children).toHaveLength(fakeCameras.length);
  });

  it('should not render cards with empty data', () => {
    render(withRouter(<CatalogCards cameras={[]}/>));

    expect(screen.queryByTestId(containerId)).not.toBeInTheDocument();
  });
});
