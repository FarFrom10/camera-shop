import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import { memo, useMemo } from 'react';

type CatalogCardsProps = {
  cameras: CameraData[];
  onModalContactMeOpen: (id: number | null) => void;
}

function CatalogCardsTemplate({cameras, onModalContactMeOpen}: CatalogCardsProps): JSX.Element {
  const cards = useMemo(() => cameras.map((camera) => <ProductCard onButtonClick={onModalContactMeOpen} camera={camera} key={camera.id}/>), [cameras, onModalContactMeOpen]);

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
