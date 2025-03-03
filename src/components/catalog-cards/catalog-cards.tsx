import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';

type CatalogCardsProps = {
  cameras: CameraData[];
}

function CatalogCards({cameras}: CatalogCardsProps): JSX.Element {
  const cards = cameras.map((camera) => <ProductCard camera={camera} key={camera.id}/>);

  return(
    <div className="cards catalog__cards">
      {cards}
    </div>
  );
}

export default CatalogCards;
