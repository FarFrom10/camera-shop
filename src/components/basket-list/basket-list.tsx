import { EmptyListMessage } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAddedCameras } from '../../store/basket-process/basket-process.selectors';
import { decreaseAmount, increaseAmount } from '../../store/basket-process/basket-process.slice';
import BasketItem from '../basket-item/basket-item';
import EmptyListTitle from '../empty-list-title/empty-list-title';

function BasketList(): JSX.Element {
  const dispatch = useAppDispatch();
  const basketCameras = useAppSelector(selectAddedCameras);
  const handleIncreaseAmount = (vendorCode: string) => dispatch(increaseAmount(vendorCode));
  const handleDecreaseAmount = (vendorCode: string) => dispatch(decreaseAmount(vendorCode));

  const basketList = basketCameras.map((camera) =>
    (
      <BasketItem
        key={camera.vendorCode}
        camera={camera}
        onIncreaseAmount={handleIncreaseAmount}
        onDecreaseAmount={handleDecreaseAmount}
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
