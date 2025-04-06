import ProductTabsList from '../product-tabs-list/product-tabs-list';
import ProductTabsText from '../product-tabs-text/product-tabs-text';
import { ProductTabsCategory } from '../../const';
import ProductTabsButton from '../product-tabs-button/product-tabs-button';
import cn from 'classnames';
import { CameraData } from '../../types/cameras';
import { Route, Routes, useParams } from 'react-router-dom';

type ProductPageTabsProps = {
  camera: CameraData;
}

function ProductPageTabs({camera}: ProductPageTabsProps): JSX.Element {
  const {description} = camera;
  const {'*': currentTab} = useParams();

  const buttons = ProductTabsCategory.map((name, i) => <ProductTabsButton tabName={name} tabNumber={i + 1} activeTab={String(i + 1) === currentTab} key={name}/>);

  return (
    <div data-testid='productTabs' className="tabs product__tabs">
      <div data-testid='tabsControls' className="tabs__controls product__tabs-controls">
        {buttons}
      </div>
      <div className="tabs__content">
        <Routes>
          <Route path='1' element={
            <div data-testid='productTabsCharacteristics' className={cn(
              'tabs__element',
              {'is-active': currentTab === String(1)}
            )}
            >
              <ProductTabsList camera={camera}/>
            </div>
          }
          />
          <Route path="2" element={
            <div data-testid='productPageTabsText' className={cn(
              'tabs__element',
              {'is-active': currentTab === String(2)}
            )}
            >
              <ProductTabsText description={description}/>
            </div>
          }
          />
        </Routes>
        {currentTab && !['1', '2'].includes(currentTab) && (
          <div data-testid='productPageTabsText' className='tabs__element is-active'>
            Таб не найден
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPageTabs;
