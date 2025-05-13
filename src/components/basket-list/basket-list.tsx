import { EmptyListMessage } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAddedCameras } from '../../store/basket-process/basket-process.selectors';
import { changeAmount } from '../../store/basket-process/basket-process.slice';
import BasketItem from '../basket-item/basket-item';
import EmptyListTitle from '../empty-list-title/empty-list-title';

function BasketList(): JSX.Element {
  const dispatch = useAppDispatch();
  const basketCameras = useAppSelector(selectAddedCameras);
  const handleAmountChange = (vendorCode: string, amount: number) => dispatch(changeAmount({vendorCode, amount}));

  const basketList = basketCameras.map((camera) =>
    (
      <BasketItem
        key={camera.vendorCode}
        camera={camera}
        onAmountChange={handleAmountChange}
      />
    ));

  return(
    <ul data-testid='basketList' className="basket__list">
      {
        !basketCameras.length
          ? <EmptyListTitle message={EmptyListMessage.Basket}/>
          : basketList
      }
    </ul>
  );
}

export default BasketList;
