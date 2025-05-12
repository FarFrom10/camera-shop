import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ButtonText } from '../../const';

type ButtonMoreDetailsProps = {
  isTransparent?: boolean;
  route?: string;
  isModal?: boolean;
  onButtonClick?: () => void;
}

function ButtonMoreDetails({isTransparent = true, route = '#', isModal = false, onButtonClick}: ButtonMoreDetailsProps):JSX.Element {
  if(isModal){
    return (
      <button onClick={onButtonClick && onButtonClick} data-testid="buttonMoreDetails" className={cn(
        'btn',
        {'btn--transparent': isTransparent},
        'modal__btn'
      )}
      >
        {ButtonText.Continue}
      </button>
    );
  }

  return (
    <Link data-testid="buttonMoreDetailsLink" className={cn(
      'btn',
      {'btn--transparent': isTransparent}
    )} to={route}
    >
      Подробнее
    </Link>
  );
}

export default ButtonMoreDetails;
