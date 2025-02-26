import { BannerSize } from '../../const';
import ButtonMoreDetails from '../button-more-details/button-more-details';

function BigBanner(): JSX.Element {
  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet="img/content/banner-bg.webp, img/content/banner-bg@2x.webp 2x"
        />
        <img
          src="img/content/banner-bg.jpg"
          srcSet="img/content/banner-bg@2x.jpg 2x"
          width={BannerSize.Width}
          height={BannerSize.Height}
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          Cannonball&nbsp;Pro&nbsp;MX&nbsp;8i
        </span>
        <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
        </span>
        <ButtonMoreDetails isTransparent={false}/>
      </p>
    </div>
  );
}

export default BigBanner;
