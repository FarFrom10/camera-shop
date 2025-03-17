type ProductTabsTextProps ={
  description: string;
}

function ProductTabsText({description}: ProductTabsTextProps): JSX.Element {
  return (
    <div data-testid='productTabsText' className="product__tabs-text">
      <p>
        {description}
      </p>
    </div>
  );
}

export default ProductTabsText;
