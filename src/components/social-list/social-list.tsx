import { SocialsNames } from '../../const';
import SocialItem from '../social-item/social-item';

function SocialList(): JSX.Element {
  const socials = SocialsNames.map((name) => <SocialItem name={name} key={name}/>);

  return (
    <ul className="social">
      {socials}
    </ul>
  );
}

export default SocialList;
