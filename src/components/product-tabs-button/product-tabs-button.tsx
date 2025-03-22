import cn from 'classnames';
import { ProductTabsCategory } from '../../const';
import { memo, MouseEvent } from 'react';

type ProductTabsButtonProps = {
  activeTab: ProductTabsCategory;
  tabName: ProductTabsCategory;
  onButtonClick: (evt: MouseEvent<HTMLButtonElement>) => void;
}

function ProductTabsButtonTemplate({activeTab, tabName, onButtonClick}: ProductTabsButtonProps): JSX.Element {
  return (
    <button
      onClick={onButtonClick}
      data-tab={tabName}
      className={cn(
        'tabs__control',
        {'is-active': activeTab === tabName}
      )}
      type="button"
    >
      {tabName}
    </button>
  );
}

const ProductTabsButton = memo(ProductTabsButtonTemplate);

export default ProductTabsButton;
