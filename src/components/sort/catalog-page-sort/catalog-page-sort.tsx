import { memo } from 'react';
import CatalogSortOrder from '../catalog-sort-order/catalog-sort-order';
import CatalogSortType from '../catalog-sort-type/catalog-sort-type';

function CatalogPageSortTemplate(): JSX.Element {
  return (
    <div data-testid='catalogPageSort' className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <CatalogSortType/>
          <CatalogSortOrder/>
        </div>
      </form>
    </div>
  );
}

const CatalogPageSort = memo(CatalogPageSortTemplate);

export default CatalogPageSort;
