import FooterNav from '../footer-nav/footer-nav';
import Logo from '../logo/logo';
import SocialList from '../social-list/social-list';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <Logo isFooter/>
          <p className="footer__description">
          Интернет-магазин фото- и видеотехники
          </p>
          <SocialList/>
        </div>
        <FooterNav/>
      </div>
    </footer>
  );
}

export default Footer;
