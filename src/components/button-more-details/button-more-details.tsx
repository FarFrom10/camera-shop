import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ButtonText } from '../../const';

type ButtonMoreDetailsProps = {
  isTransparent?: boolean;
  route?: string;
  isModal?: boolean;
  onButtonClick?: () => void;
  isHalfWidth?: boolean;
}

function ButtonMoreDetails({
  onButtonClick,
  route = '#',
  isTransparent = true,
  isModal = false,
  isHalfWidth = false
}: ButtonMoreDetailsProps):JSX.Element {
  if(isModal){
    return (
      <button onClick={onButtonClick && onButtonClick} data-testid="buttonMoreDetails" className={cn(
        'btn',
        'modal__btn',
        {'btn--transparent': isTransparent},
        {'modal__btn--half-width': isHalfWidth},
      )}
      >
        {ButtonText.Continue}
      </button>
    );
  }

  return (
    <Link data-testid="buttonMoreDetailsLink" className={cn(
      'btn',
      {'btn--transparent': isTransparent},
      {'modal__btn--half-width': isHalfWidth},
    )} to={route}
    >
      Подробнее
    </Link>
  );
}

export default ButtonMoreDetails;
