import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import { memo, useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { selectSortOrder, selectSortType } from '../../store/sort-process/sort-process.selectors';
import { sortCamerasByType } from '../../utils/sort';

type CatalogCardsProps = {
  cameras: CameraData[];
  onModalContactMeOpen: (id: number | null) => void;
}

function CatalogCardsTemplate({cameras, onModalContactMeOpen}: CatalogCardsProps): JSX.Element {
  const currentSortOrder = useAppSelector(selectSortOrder);
  const currentSortType = useAppSelector(selectSortType);

  const sortedCameras = sortCamerasByType([...cameras], currentSortType, currentSortOrder);

  const cards = useMemo(() => sortedCameras.map((camera) => <ProductCard onButtonClick={onModalContactMeOpen} camera={camera} key={camera.id}/>), [sortedCameras, onModalContactMeOpen]);

  if (sortedCameras.length === 0) {
    return <EmptyListTitle message={EmptyListMessage.Cameras}/>;
  }

  return(
    <div data-testid='catalogCardsContainer' className="cards catalog__cards">
      {cards}
    </div>
  );
}

const CatalogCards = memo(CatalogCardsTemplate);

export default CatalogCards;
