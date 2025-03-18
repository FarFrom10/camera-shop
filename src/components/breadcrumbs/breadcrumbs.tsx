import { useLocation, useParams } from 'react-router-dom';
import BreadcrubmsItem from '../breadcrumbs-item/breadcrumbs-item';
import { isValueAppRoute } from '../../utils/type';
import { useAppSelector } from '../../hooks';
import { selectCurrentCamera } from '../../store/cameras-process/cameras-process.selectors';
import { getFilteredPathnames } from '../../utils/common';

function Breadcrumbs(): JSX.Element {
  const { pathname } = useLocation();
  const { id } = useParams();
  const currentCamera = useAppSelector(selectCurrentCamera);

  const pathnames = pathname.length > 1
    ? pathname.split('/')
    : ['/'];

  const filteredPathnames = getFilteredPathnames(pathnames, id);

  const breadcrumbsList = filteredPathnames.map((path, i) => {
    const isLastIndex = i === filteredPathnames.length - 1;

    if (isValueAppRoute(path)){
      return <BreadcrubmsItem route={path} key={path} isActive={isLastIndex}/>;
    }
    return <BreadcrubmsItem productName={currentCamera?.name} productRoute={path} key={path} isActive={isLastIndex}/>;
  });

  return(
    <div data-testid="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {breadcrumbsList}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
