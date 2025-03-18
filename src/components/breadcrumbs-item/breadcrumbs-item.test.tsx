import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import BreadcrubmsItem from './breadcrumbs-item';
import { AppRoute, RouteName } from '../../const';

describe('Component: BreadcrubmsItem', () => {
  const itemId = 'breadcrubmsItem';
  const route = AppRoute.Index;
  const pageNameText = RouteName[route];

  it('should render correctly', () => {
    render(withRouter(
      <BreadcrubmsItem />));

    expect(screen.getByTestId(itemId)).toBeInTheDocument();
  });

  it('should render "span" tag with active class if "isActive" prop is true', () => {
    render(withRouter(
      <BreadcrubmsItem isActive/>));

    expect(screen.getByTestId(itemId).children[0]).toHaveClass('breadcrumbs__link--active');
  });

  it('should render page name', () => {
    render(withRouter(
      <BreadcrubmsItem route={route}/>));

    expect(screen.getByText(pageNameText)).toBeInTheDocument();
  });

  it('should render product name with "productName" prop', () => {
    const productName = 'some product';

    render(withRouter(
      <BreadcrubmsItem productName={productName}/>));

    expect(screen.getByText(productName)).toBeInTheDocument();
  });
});
