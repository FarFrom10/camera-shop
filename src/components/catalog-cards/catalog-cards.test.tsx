import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import CatalogCards from './catalog-cards';
import { fakeCameras } from '../../mocks/mock-test';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: CatalogCards', () => {
  const containerId = 'catalogCardsContainer';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogCards onModalContactMeOpen={mockEmptyCallback} cameras={fakeCameras}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId).children).toHaveLength(fakeCameras.length);
  });

  it('should not render cards with empty data', () => {
    const {withStoreComponent} = withStore(
      <CatalogCards onModalContactMeOpen={mockEmptyCallback} cameras={[]}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.queryByTestId(containerId)).not.toBeInTheDocument();
  });
});
