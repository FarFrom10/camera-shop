import { useAppDispatch } from '../../../hooks';
import { resetFilters } from '../../../store/filter-process/filter-process.slice';
import { CameraData } from '../../../types/cameras';
import CatalogFilterCategory from '../catalog-filter-category/catalog-filter-category';
import CatalogFilterLevel from '../catalog-filter-level/catalog-filter-level';
import CatalogFilterPrice from '../catalog-filter-price/catalog-filter-price';
import CatalogFilterType from '../catalog-filter-type/catalog-filter-type';

type CatalogFilterProps = {
  cameras: CameraData[];
}

function CatalogFilter({cameras}: CatalogFilterProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => dispatch(resetFilters());

  return (
    <div data-testid="catalogFilter" className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <CatalogFilterPrice cameras={cameras}/>
        <CatalogFilterCategory/>
        <CatalogFilterType/>
        <CatalogFilterLevel/>
        <button onClick={handleResetFilters} className="btn catalog-filter__reset-btn" type="reset">
      Сбросить фильтры
        </button>
      </form>
    </div>

  );
}

export default CatalogFilter;
