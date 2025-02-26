import cn from 'classnames';

type ButtonMoreDetailsProps = {
  isTransparent?: boolean;
}

function ButtonMoreDetails({isTransparent = true}: ButtonMoreDetailsProps):JSX.Element {
  return (
    <a className={cn(
      'btn',
      {'btn--transparent': isTransparent}
    )} href="#"
    >
          Подробнее
    </a>
  );
}

export default ButtonMoreDetails;
