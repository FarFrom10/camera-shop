import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { LogoClass } from '../../const';
import { withRouter } from '../../utils/mock-component';

describe('Component: Logo', () => {
  const linkTestId = 'logoLink';
  const spanTestId = 'logoSpan';
  const headerClass = LogoClass.Header;
  const footerClass = LogoClass.Footer;

  it('should render correctly in header and return Link', () => {
    render(withRouter(<Logo />));
    const logoElement = screen.getByTestId(linkTestId);

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(headerClass);
  });

  it('should render correctly with prop "isIndexPage" in header and return span', () => {
    render(<Logo isIndexPage/>);
    const logoElement = screen.getByTestId(spanTestId);

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(headerClass);
  });

  it('should render correctly with prop "isFooter" in footer and return Link', () => {
    render(withRouter(<Logo isFooter/>));
    const logoElement = screen.getByTestId(linkTestId);

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(footerClass);
  });
});
