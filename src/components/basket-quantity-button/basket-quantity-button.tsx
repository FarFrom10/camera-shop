import { ButtonQuantityDirection, IconName } from '../../const';
import CommonIcon from '../common-icon/common-icon';

type BasketQuantityButtonProps = {
  direction?: ButtonQuantityDirection;
  onButtonClick: () => void;
  isDisabled?: boolean;
}

function BasketQuantityButton({
  direction = ButtonQuantityDirection.Prev,
  onButtonClick,
  isDisabled = false
}: BasketQuantityButtonProps): JSX.Element {
  const text = direction === ButtonQuantityDirection.Next ? 'увеличить' : 'уменьшить';

  return (
    <button
      disabled={isDisabled}
      onClick={onButtonClick}
      className={`btn-icon btn-icon--${direction}`}
      aria-label={`${text} количество товара`}
    >
      <CommonIcon icon={IconName.ArrowSide}/>
    </button>
  );
}

export default BasketQuantityButton;
