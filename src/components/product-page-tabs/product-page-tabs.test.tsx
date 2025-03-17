import { render, screen } from '@testing-library/react';
import { withRouter } from '../../utils/mock-component';
import { fakeCurrentCamera } from '../../mocks/mock-test';
import ProductPageTabs from './product-page-tabs';
import userEvent from '@testing-library/user-event';

describe('Component: ProductPageTabs', () => {
  const containerId = 'productTabs';
  const controlsContainerId = 'tabsControls';
  const tabCharacteristicsId = 'productTabsCharacteristics';
  const tabDescriptionId = 'productPageTabsText';

  it('should render correctly', () => {
    render(withRouter(<ProductPageTabs camera={fakeCurrentCamera}/>));

    expect(screen.getByTestId(containerId)).toBeInTheDocument();
    expect(screen.getByTestId(controlsContainerId)).toBeInTheDocument();
    expect(screen.getByTestId(tabCharacteristicsId)).toBeInTheDocument();
    expect(screen.getByTestId(tabDescriptionId)).toBeInTheDocument();
  });

  it('should characteristics tab be active after button click', async () => {
    render(withRouter(<ProductPageTabs camera={fakeCurrentCamera}/>));
    const characteristicsButton = screen.getByTestId(controlsContainerId).children[0];

    await userEvent.click(characteristicsButton);

    expect(screen.getByTestId(tabCharacteristicsId)).toHaveClass('is-active');
    expect(screen.getByTestId(tabDescriptionId)).not.toHaveClass('is-active');
  });

  it('should description tab be active after button click', async () => {
    render(withRouter(<ProductPageTabs camera={fakeCurrentCamera}/>));
    const descriptionButton = screen.getByTestId(controlsContainerId).children[1];

    await userEvent.click(descriptionButton);

    expect(screen.getByTestId(tabDescriptionId)).toHaveClass('is-active');
    expect(screen.getByTestId(tabCharacteristicsId)).not.toHaveClass('is-active');
  });
});
