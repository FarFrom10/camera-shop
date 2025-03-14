import { render, screen } from '@testing-library/react';
import CatalogAside from './catalog-aside';

describe('Component: CatalogAside', () => {
  it('should render correctly', () => {
    const imageTestId = 'bannerImage';

    render(<CatalogAside/>);
    const imageElement = screen.getByTestId(imageTestId);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'img/banner.png');
  });
});
