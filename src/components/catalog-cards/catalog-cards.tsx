import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import { memo, useMemo } from 'react';

type CatalogCardsProps = {
  cameras: CameraData[];
  onModalAddToBasketOpen: (id: number | null) => void;
}

function CatalogCardsTemplate({cameras, onModalAddToBasketOpen}: CatalogCardsProps): JSX.Element {
  const cards = useMemo(() => cameras.map((camera) => <ProductCard onButtonClick={onModalAddToBasketOpen} camera={camera} key={camera.id}/>), [cameras, onModalAddToBasketOpen]);

  return(
    <div data-testid='catalogCardsContainer' className="cards catalog__cards">
      {
        !cameras.length
          ? <EmptyListTitle message={EmptyListMessage.Cameras}/>
          : cards
      }
    </div>
  );
}

const CatalogCards = memo(CatalogCardsTemplate);

export default CatalogCards;
