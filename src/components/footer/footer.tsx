import { memo } from 'react';
import FooterNav from '../footer-nav/footer-nav';
import Logo from '../logo/logo';
import SocialList from '../social-list/social-list';

type FooterProps = {
  isIndexPage?: boolean;
}

function FooterTemplate({isIndexPage = false}: FooterProps): JSX.Element {
  return (
    <footer data-testid='footer' className="footer">
      <div className="container">
        <div className="footer__info">
          <Logo isIndexPage={isIndexPage} isFooter/>
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

const Footer = memo(FooterTemplate);

export default Footer;
