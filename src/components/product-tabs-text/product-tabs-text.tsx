import { memo } from 'react';

type ProductTabsTextProps ={
  description: string;
}

function ProductTabsTextTemplate({description}: ProductTabsTextProps): JSX.Element {
  return (
    <div data-testid='productTabsText' className="product__tabs-text">
      <p>
        {description}
      </p>
    </div>
  );
}

const ProductTabsText = memo(ProductTabsTextTemplate);

export default ProductTabsText;
