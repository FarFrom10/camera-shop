import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter, withStore } from '../../utils/mock-component';
import CatalogCards from './catalog-cards';
import { fakeCameras } from '../../mocks/mock-test';
import { makeFakeStore } from '../../utils/mocks';
import { EmptyListMessage } from '../../const';

describe('Component: CatalogCards', () => {
  const containerId = 'catalogCardsContainer';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogCards onModalAddToBasketOpen={mockEmptyCallback} cameras={fakeCameras}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(containerId).children).toHaveLength(fakeCameras.length);
  });

  it('should render text "EmptyListMessage.Cameras" with empty "cameras" data', () => {
    const {withStoreComponent} = withStore(
      <CatalogCards onModalAddToBasketOpen={mockEmptyCallback} cameras={[]}/>,
      makeFakeStore()
    );

    render(withRouter(withStoreComponent));

    expect(screen.getByText(EmptyListMessage.Cameras)).toBeInTheDocument();
  });
});
