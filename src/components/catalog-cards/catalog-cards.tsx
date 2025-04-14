import ProductCard from '../product-card/product-card';
import { CameraData } from '../../types/cameras';
import { EmptyListMessage } from '../../const';
import EmptyListTitle from '../empty-list-title/empty-list-title';
import { memo, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSortOrder, selectSortType } from '../../store/sort-process/sort-process.selectors';
import { sortCamerasByType } from '../../utils/sort';
import { getFilteredCameras } from '../../utils/filter';
import { selectFilterState } from '../../store/filter-process/filter-process.selectors';
import { updateSortedCameras } from '../../store/cameras-process/cameras-process.slice';

type CatalogCardsProps = {
  cameras: CameraData[];
  onModalContactMeOpen: (id: number | null) => void;
}

function CatalogCardsTemplate({cameras, onModalContactMeOpen}: CatalogCardsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const currentSortOrder = useAppSelector(selectSortOrder);
  const currentSortType = useAppSelector(selectSortType);
  const wholeFilterState = useAppSelector(selectFilterState);

  const filteredCameras = getFilteredCameras(
    [...cameras],
    wholeFilterState
  );
  const sortedCameras = sortCamerasByType(filteredCameras, currentSortType, currentSortOrder);

  useEffect(() => {
    dispatch(updateSortedCameras(sortedCameras));

  }, [dispatch, sortedCameras]);

  const cards = useMemo(() => sortedCameras.map((camera) => <ProductCard onButtonClick={onModalContactMeOpen} camera={camera} key={camera.id}/>), [sortedCameras, onModalContactMeOpen]);

  return(
    <div data-testid='catalogCardsContainer' className="cards catalog__cards">
      {
        !sortedCameras.length
          ? <EmptyListTitle message={EmptyListMessage.Cameras}/>
          : cards
      }
    </div>
  );
}

const CatalogCards = memo(CatalogCardsTemplate);

export default CatalogCards;
