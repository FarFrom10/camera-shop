import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import ProductTabsButton from './product-tabs-button';
import { ProductTabsCategory } from '../../const';

describe('Component: ProductTabsButton', () => {
  it('should render correctly and have "is-active" class', () => {
    const tabNumber = 1;
    const tab = ProductTabsCategory[tabNumber];
    const currentTab = '1'; // number from params

    render(withRouter(
      <ProductTabsButton
        activeTab={String(tabNumber) === currentTab}
        tabName={tab}
        tabNumber={tabNumber}
      />));

    expect(screen.getByText(tab)).toBeInTheDocument();
    expect(screen.getByText(tab)).toHaveClass('is-active');
  });

  it('should not have "is-active" class if "tabNumber" !== "currentTab"', () => {
    const tabNumber = 0;
    const tab = ProductTabsCategory[tabNumber];
    const currentTab = '1'; // number from params

    render(withRouter(
      <ProductTabsButton
        activeTab={String(tabNumber) === currentTab}
        tabName={tab}
        tabNumber={tabNumber}
      />));

    expect(screen.getByText(tab)).not.toHaveClass('is-active');
  });
});
