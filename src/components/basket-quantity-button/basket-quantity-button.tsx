import { ButtonQuantityDirection, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type BasketQuantityButtonProps = {
  direction?: ButtonQuantityDirection;
  onButtonClick: () => void;
}

function BasketQuantityButton({direction = ButtonQuantityDirection.Prev, onButtonClick}: BasketQuantityButtonProps): JSX.Element {
  const text = direction === ButtonQuantityDirection.Next ? 'увеличить' : 'уменьшить';

  return (
    <button
      onClick={onButtonClick}
      className={`btn-icon btn-icon--${direction}`}
      aria-label={`${text} количество товара`}
    >
      <CommonIcon icon={IconName.ArrowSide}/>
    </button>
  );
}

export default BasketQuantityButton;
