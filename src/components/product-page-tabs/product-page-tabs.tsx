import { MouseEvent, useState } from 'react';
import ProductTabsList from '../product-tabs-list/product-tabs-list';
import ProductTabsText from '../product-tabs-text/product-tabs-text';
import { ProductTabsCategory } from '../../const';
import ProductTabsButton from '../product-tabs-button/product-tabs-button';
import cn from 'classnames';
import { isValueProductTabsCategory } from '../../utils/type';

function ProductPageTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState<ProductTabsCategory>(ProductTabsCategory.Description);

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    if(evt.target instanceof HTMLElement
      && evt.target.dataset.tab
      && isValueProductTabsCategory(evt.target.dataset.tab)){
      setActiveTab(evt.target.dataset.tab);
    }
  };

  const buttons = Object.values(ProductTabsCategory)
    .map((tab) => <ProductTabsButton onButtonClick={handleButtonClick} tabName={tab} activeTab={activeTab} key={tab}/>);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {buttons}
      </div>
      <div className="tabs__content">
        <div className={cn(
          'tabs__element',
          {'is-active': activeTab === ProductTabsCategory.Characteristics}
        )}
        >
          <ProductTabsList/>
        </div>
        <div className={cn(
          'tabs__element',
          {'is-active': activeTab === ProductTabsCategory.Description}
        )}
        >
          <ProductTabsText/>
        </div>
      </div>
    </div>
  );
}

export default ProductPageTabs;
