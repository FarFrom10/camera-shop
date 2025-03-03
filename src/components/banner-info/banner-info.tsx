import ButtonMoreDetails from '../button-more-details/button-more-details';

type BannerInfoProps = {
  name: string;
}

function BannerInfo({name}: BannerInfoProps): JSX.Element {
  return(
    <p className="banner__info">
      <span className="banner__message">Новинка!</span>
      <span className="title title--h1">
        {name}
      </span>
      <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
      </span>
      <ButtonMoreDetails isTransparent={false}/>
    </p>
  );
}

export default BannerInfo;
