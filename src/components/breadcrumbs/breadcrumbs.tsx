import BreadcrubmsItem from '../breadcrumbs-item/breadcrumbs-item';
import { isValueAppRoute } from '../../utils/type';
import { useAppSelector } from '../../hooks';
import { selectCurrentCamera } from '../../store/cameras-process/cameras-process.selectors';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { generatePath, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';

function Breadcrumbs(): JSX.Element {
  const { id, '*': tab } = useParams();
  const currentCamera = useAppSelector(selectCurrentCamera);
  const breadcrumbs = useReactRouterBreadcrumbs();

  const breadcrumbsList = breadcrumbs.map(({ key }, i) => {
    const path = key;
    const isLastIndex = i === breadcrumbs.length - 1;
    const currentCameraPath = `${generatePath(AppRoute.Product,
      {id: String(id)})}/${String(tab)}`;

    //Путь указвыает на один из путей перечисления AppRoute
    if (isValueAppRoute(path)){
      return <BreadcrubmsItem route={path} key={path} isActive={isLastIndex}/>;
    }
    //Путь указывает на страницу конкретного продукта
    if (path === currentCameraPath){
      return <BreadcrubmsItem productName={currentCamera?.name} productRoute={path} key={path} isActive={isLastIndex}/>;
    }
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
