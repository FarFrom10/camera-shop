import { nanoid } from '@reduxjs/toolkit';
import { TemporaryNumbers } from '../../const';
import ProductCard from '../product-card/product-card';

function CatalogCards(): JSX.Element {
  const cards = Array.from({length: TemporaryNumbers.CatalogCards}).map(() => <ProductCard key={nanoid()}/>);

  return(
    <div className="cards catalog__cards">
      {cards}
    </div>
  );
}

export default CatalogCards;
