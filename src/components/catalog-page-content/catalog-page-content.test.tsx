import { render, screen } from '@testing-library/react';
import { withRouter, withStore } from '../../utils/mock-component';
import CatalogPageContent from './catalog-page-content';
import { makeFakeStore } from '../../utils/mocks';

describe('Component: CatalogPageContent', () => {
  const containerId = 'catalogPageContent';
  const expectedTitleText = 'Каталог фото- и видеотехники';

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(
      <CatalogPageContent />,
      makeFakeStore()
    );
    render(withRouter(withStoreComponent));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByText(expectedTitleText)).toBeInTheDocument();
  });
});
