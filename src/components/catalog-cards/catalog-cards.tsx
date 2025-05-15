import ProductCard from '../product-card/product-card';
import { BasketItemsData, CameraData } from '../../types/cameras';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import { memo, useMemo } from 'react';

type CatalogCardsProps = {
  cameras: CameraData[];
  onModalAddToBasketOpen: (id: number | null) => void;
  camerasInCart: BasketItemsData[];
}

function CatalogCardsTemplate({cameras, onModalAddToBasketOpen, camerasInCart}: CatalogCardsProps): JSX.Element {
  const cards = useMemo(() => cameras.map((camera) => {
    const isAddedToCart = camerasInCart.some((item) => item.id === camera.id);

    return <ProductCard isAddedToCart={isAddedToCart} onButtonClick={onModalAddToBasketOpen} camera={camera} key={camera.id}/>;
  }
  ), [cameras, onModalAddToBasketOpen, camerasInCart]);

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
