import { render, screen } from '@testing-library/react';
import { mockEmptyCallback, withRouter } from '../../utils/mock-component';
import ProductTabsButton from './product-tabs-button';
import { ProductTabsCategory } from '../../const';

describe('Component: ProductTabsButton', () => {
  it('should render correctly and have "is-active" class', () => {
    const activeTab = ProductTabsCategory.Characteristics;
    const currentTab = ProductTabsCategory.Characteristics;

    render(withRouter(
      <ProductTabsButton
        activeTab={activeTab}
        tabName={currentTab}
        onButtonClick={mockEmptyCallback}
      />));

    expect(screen.getByText(currentTab)).toBeInTheDocument();
    expect(screen.getByText(currentTab)).toHaveClass('is-active');
  });

  it('should not have "is-active" class if "activeTab" !== "tabName"', () => {
    const activeTab = ProductTabsCategory.Description;
    const currentTab = ProductTabsCategory.Characteristics;

    render(withRouter(
      <ProductTabsButton
        activeTab={activeTab}
        tabName={currentTab}
        onButtonClick={mockEmptyCallback}
      />));

    expect(screen.getByText(currentTab)).not.toHaveClass('is-active');
  });
});
