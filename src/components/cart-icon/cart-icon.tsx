import { CartIconName } from '../../const';
import { CartIconSettings } from './cart-icon-settings';

type CartIconProps = {
  icon: CartIconName;
}

function CartIcon({icon}: CartIconProps): JSX.Element {
  return (
    <svg width={CartIconSettings[icon].width} height={CartIconSettings[icon].height} aria-hidden="true">
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}

export default CartIcon;
