import BreadcrubmsItem from '../breadcrumbs-item/breadcrumbs-item';

function Breadcrumbs(): JSX.Element {
  return(
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <BreadcrubmsItem page={'Главная'}/>
          <BreadcrubmsItem page={'Каталог'} isActive/>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
