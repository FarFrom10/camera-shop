import CommonIcon from '../common-icon/common-icon';
import { IconName } from '../../const';

function ButtonUp(): JSX.Element {
  return (
    <a className="up-btn" href="#header">
      <CommonIcon icon={IconName.ArrowUp}/>
    </a>
  );
}

export default ButtonUp;
