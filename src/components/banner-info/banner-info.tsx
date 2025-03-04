import { generatePath } from 'react-router-dom';
import ButtonMoreDetails from '../button-more-details/button-more-details';
import { AppRoute } from '../../const';

type BannerInfoProps = {
  id: string;
  name: string;
}

function BannerInfo({id, name}: BannerInfoProps): JSX.Element {
  return(
    <p className="banner__info">
      <span className="banner__message">Новинка!</span>
      <span className="title title--h1">
        {name}
      </span>
      <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
      </span>
      <ButtonMoreDetails route={generatePath(AppRoute.Product, {id: id})} isTransparent={false}/>
    </p>
  );
}

export default BannerInfo;
