import CommonIcon from '../common-icon/common-icon';
import { IconName } from '../../const';

function ButtonUp(): JSX.Element {
  const handleButtonClick = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  return (
    <button onClick={handleButtonClick} className="up-btn">
      <CommonIcon icon={IconName.ArrowUp}/>
    </button>
  );
}

export default ButtonUp;
