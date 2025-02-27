import { Helmet } from 'react-helmet-async';
import { AppRoute, RouteName, SITE_NAME } from '../../const';

type TitleProps = {
  pageName: AppRoute;
}

function Title({pageName}: TitleProps):JSX.Element{
  return (
    <Helmet>
      <title>{`${SITE_NAME}: ${RouteName[pageName]}`}</title>
    </Helmet>
  );
}

export default Title;
