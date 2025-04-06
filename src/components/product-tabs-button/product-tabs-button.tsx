import cn from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';

type ProductTabsButtonProps = {
  activeTab: boolean;
  tabName: string;
  tabNumber: number;
}

function ProductTabsButtonTemplate({activeTab, tabName, tabNumber}: ProductTabsButtonProps): JSX.Element {
  return (
    <Link
      to={String(tabNumber)}
      className={cn(
        'tabs__control',
        {'is-active': activeTab}
      )}
      type="button"
    >
      {tabName}
    </Link>
  );
}

const ProductTabsButton = memo(ProductTabsButtonTemplate);

export default ProductTabsButton;
