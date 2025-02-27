import { useLocation } from 'react-router-dom';
import BreadcrubmsItem from '../breadcrumbs-item/breadcrumbs-item';
import { isValueAppRoute } from '../../utils/type';

function Breadcrumbs(): JSX.Element {
  const { pathname } = useLocation();
  const pathnames = pathname.length > 1
    ? pathname.split('/').map((path) => `/${path}`)
    : ['/'];

  const breadcrumbsList = pathnames.map((path, i) => {
    const isLastIndex = i === pathnames.length - 1;

    if (isValueAppRoute(path)){
      return <BreadcrubmsItem route={path} key={path} isActive={isLastIndex}/>;
    }
  });

  return(
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {breadcrumbsList}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
