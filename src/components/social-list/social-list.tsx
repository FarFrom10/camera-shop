import { memo, useMemo } from 'react';
import { SocialsNames } from '../../const';
import SocialItem from '../social-item/social-item';

function SocialListTemplate(): JSX.Element {
  const socials = useMemo(() => SocialsNames.map((name) => <SocialItem name={name} key={name}/>), []);

  return (
    <ul data-testid='socialList' className="social">
      {socials}
    </ul>
  );
}

const SocialList = memo(SocialListTemplate);

export default SocialList;
