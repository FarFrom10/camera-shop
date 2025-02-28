import { Helmet } from 'react-helmet-async';
import { AppRoute, RouteName, SITE_NAME } from '../../const';

type TitleProps = {
  pageName: AppRoute;
}

function Title({pageName}: TitleProps):JSX.Element{
  return (
    <Helmet>
      <title>{`${RouteName[pageName]} - ${SITE_NAME}`}</title>
    </Helmet>
  );
}

export default Title;
