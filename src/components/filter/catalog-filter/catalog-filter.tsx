import { useAppDispatch } from '../../../hooks';
import { resetFilters } from '../../../store/filter-process/filter-process.slice';
import CatalogFilterCategory from '../catalog-filter-category/catalog-filter-category';
import CatalogFilterLevel from '../catalog-filter-level/catalog-filter-level';
import CatalogFilterPrice from '../catalog-filter-price/catalog-filter-price';
import CatalogFilterType from '../catalog-filter-type/catalog-filter-type';

function CatalogFilter(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => dispatch(resetFilters());

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <CatalogFilterPrice/>
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
